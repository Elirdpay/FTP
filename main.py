from fastapi import Depends

from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from pydantic import BaseModel
import sqlite3
import hashlib
import jwt
from datetime import datetime, timedelta
from typing import Optional

app = FastAPI()
DATABASE = "db/app.db"

# JWT settings (simple demo - for production use secure key management)
SECRET_KEY = "change-this-secret"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")

# CORS - allow frontend (Next.js) origin
app.add_middleware(
    CORSMiddleware,
    # For local development allow all origins. In production narrow this down.
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

# Endpoint для полной очистки корзины
from fastapi import Depends

def run_migrations():
    conn = sqlite3.connect(DATABASE)
    cur = conn.cursor()
    # ensure users table has tokens and currency balance columns
    cols = [r[1] for r in cur.execute("PRAGMA table_info(users)").fetchall()]
    if 'tokens' not in cols:
        try:
            cur.execute("ALTER TABLE users ADD COLUMN tokens INTEGER DEFAULT 0")
        except Exception:
            pass
    if 'currency_balance' not in cols:
        try:
            cur.execute("ALTER TABLE users ADD COLUMN currency_balance REAL DEFAULT 0")
        except Exception:
            pass
    # if 'balance' missing but currency_balance present, create balance and copy values
    cols = [r[1] for r in cur.execute("PRAGMA table_info(users)").fetchall()]
    if 'balance' not in cols and 'currency_balance' in cols:
        try:
            cur.execute("ALTER TABLE users ADD COLUMN balance REAL DEFAULT 0")
            cur.execute("UPDATE users SET balance = currency_balance WHERE currency_balance IS NOT NULL")
        except Exception:
            pass
    conn.commit()
    conn.close()

# Run migrations at startup
try:
    run_migrations()
except Exception as e:
    print('Migration error', e)

def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

class UserCreate(BaseModel):
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

from fastapi import Body
from fastapi.responses import JSONResponse

# Новый endpoint регистрации
@app.post("/auth/register")
def register_new(data: dict = Body(...)):
    email = data.get('email')
    password = data.get('password')
    if not email or '@' not in email:
        return JSONResponse(status_code=400, content={"detail": "Некорректный email"})
    if not password or len(password) < 8:
        return JSONResponse(status_code=400, content={"detail": "Пароль должен быть не менее 8 символов"})
    conn = get_db()
    cur = conn.cursor()
    try:
        # insert with defaults for tokens and balance if columns exist
        cols = [r[1] for r in cur.execute("PRAGMA table_info(users)").fetchall()]
        if 'tokens' in cols and 'balance' in cols:
            cur.execute("INSERT INTO users (email, password_hash, tokens, balance) VALUES (?, ?, ?, ?)", (email, hash_password(password), 0, 0))
        else:
            cur.execute("INSERT INTO users (email, password_hash) VALUES (?, ?)", (email, hash_password(password)))
        conn.commit()
        return {"msg": "User registered"}
    except sqlite3.IntegrityError:
        return JSONResponse(status_code=400, content={"detail": "Email уже зарегистрирован"})
    finally:
        conn.close()


# Новый endpoint логина
@app.post("/auth/login")
def login_new(data: dict = Body(...)):
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return JSONResponse(status_code=400, content={"detail": "Email и пароль обязательны"})
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE email = ?", (email,))
    user = cur.fetchone()
    conn.close()
    if not user or user["password_hash"] != hash_password(password):
        return JSONResponse(status_code=401, content={"detail": "Неверные данные"})
    access_token = create_access_token({"sub": str(user["id"]), "email": user["email"]})
    return {"access_token": access_token, "token_type": "bearer"}

def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = int(payload.get("sub"))
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")
    conn = get_db()
    cur = conn.cursor()
    # select standard fields plus balance and tokens
    cols = [r[1] for r in cur.execute("PRAGMA table_info(users)").fetchall()]
    select_fields = ["id","email"]
    if 'balance' in cols:
        select_fields.append('balance')
    if 'tokens' in cols:
        select_fields.append('tokens')
    cur.execute(f"SELECT {', '.join(select_fields)} FROM users WHERE id = ?", (user_id,))
    user = cur.fetchone()
    conn.close()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return dict(user)

# Корректный endpoint очистки корзины
@app.post("/me/cart/clear")
def clear_cart(current_user: dict = Depends(get_current_user)):
    user_id = current_user["id"]
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT id FROM carts WHERE user_id = ? ORDER BY id DESC LIMIT 1", (user_id,))
    cart = cur.fetchone()
    if not cart:
        conn.close()
        return {"msg": "Корзина уже пуста"}
    cart_id = cart["id"]
    cur.execute("DELETE FROM cart_items WHERE cart_id = ?", (cart_id,))
    conn.commit()
    conn.close()
    return {"msg": "Корзина очищена"}

@app.post("/me/cart/clear")
def clear_cart(current_user: dict = Depends(get_current_user)):
    user_id = current_user["id"]
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT id FROM carts WHERE user_id = ? ORDER BY id DESC LIMIT 1", (user_id,))
    cart = cur.fetchone()
    if not cart:
        conn.close()
        return {"msg": "Корзина уже пуста"}
    cart_id = cart["id"]
    cur.execute("DELETE FROM cart_items WHERE cart_id = ?", (cart_id,))
    conn.commit()
    conn.close()
    return {"msg": "Корзина очищена"}

# Endpoint для полной очистки корзины
from fastapi import Depends
@app.post("/me/cart/clear")
def clear_cart(current_user: dict = Depends(get_current_user)):
    user_id = current_user["id"]
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT id FROM carts WHERE user_id = ? ORDER BY id DESC LIMIT 1", (user_id,))
    cart = cur.fetchone()
    if not cart:
        conn.close()
        return {"msg": "Корзина уже пуста"}
    cart_id = cart["id"]
    cur.execute("DELETE FROM cart_items WHERE cart_id = ?", (cart_id,))
    conn.commit()
    conn.close()
    return {"msg": "Корзина очищена"}

@app.get("/me/profile")
def profile(current_user: dict = Depends(get_current_user)):
    # Возвращает профиль: email, balance, текущая корзина id
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT id FROM carts WHERE user_id = ? ORDER BY id DESC LIMIT 1", (current_user["id"],))
    cart = cur.fetchone()
    conn.close()
    # return normalized profile with balance
    bal = 0
    if isinstance(current_user, dict):
        bal = current_user.get('balance', 0)
    else:
        bal = current_user['balance'] if 'balance' in current_user.keys() else 0
    return {"id": current_user["id"], "email": current_user["email"], "tokens": current_user.get('tokens', 0) if isinstance(current_user, dict) else (current_user['tokens'] if 'tokens' in current_user.keys() else 0), "balance": bal or 0, "cart_id": cart["id"] if cart else None}

@app.get("/me/cart")
def get_cart(current_user: dict = Depends(get_current_user)):
    user_id = current_user["id"]
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT id FROM carts WHERE user_id = ? ORDER BY id DESC LIMIT 1", (user_id,))
    cart = cur.fetchone()
    if not cart:
        conn.close()
        return []
    cart_id = cart["id"]
    cur.execute("""
        SELECT products.id as product_id, products.name, products.price, cart_items.quantity, cart_items.id as cart_item_id
        FROM cart_items
        JOIN products ON cart_items.product_id = products.id
        WHERE cart_items.cart_id = ?
    """, (cart_id,))
    items = cur.fetchall()
    conn.close()
    return [dict(i) for i in items]

class CartAdd(BaseModel):
    product_id: str
    quantity: int = 1

@app.post("/me/cart/add")
def add_to_cart(item: CartAdd, current_user: dict = Depends(get_current_user)):
    user_id = current_user["id"]
    conn = get_db()
    cur = conn.cursor()
    # Resolve product id: allow numeric id or product name
    prod_id = None
    try:
        prod_id = int(item.product_id)
    except Exception:
        cur.execute("SELECT id FROM products WHERE name = ? LIMIT 1", (item.product_id,))
        r = cur.fetchone()
        if r:
            prod_id = r["id"]
    if not prod_id:
        conn.close()
        raise HTTPException(status_code=400, detail="Product not found")
    # Найти или создать корзину
    cur.execute("SELECT id FROM carts WHERE user_id = ? ORDER BY id DESC LIMIT 1", (user_id,))
    cart = cur.fetchone()
    if not cart:
        cur.execute("INSERT INTO carts (user_id) VALUES (?)", (user_id,))
        cart_id = cur.lastrowid
    else:
        cart_id = cart["id"]
    # Если товар уже есть — увеличить количество, иначе добавить
    cur.execute("SELECT id, quantity FROM cart_items WHERE cart_id = ? AND product_id = ?", (cart_id, prod_id))
    existing = cur.fetchone()
    if existing:
        new_q = existing["quantity"] + item.quantity
        cur.execute("UPDATE cart_items SET quantity = ? WHERE id = ?", (new_q, existing["id"]))
    else:
        cur.execute("INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)", (cart_id, prod_id, item.quantity))
    conn.commit()
    conn.close()
    return {"msg": "Added"}

@app.post("/me/cart/remove")
def remove_from_cart(product_id: str, current_user: dict = Depends(get_current_user)):
    user_id = current_user["id"]
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT id FROM carts WHERE user_id = ? ORDER BY id DESC LIMIT 1", (user_id,))
    cart = cur.fetchone()
    if not cart:
        conn.close()
        raise HTTPException(status_code=400, detail="No cart")
    cart_id = cart["id"]
    # resolve id if necessary
    try:
        pid = int(product_id)
    except Exception:
        cur.execute("SELECT id FROM products WHERE name = ? LIMIT 1", (product_id,))
        r = cur.fetchone()
        pid = r["id"] if r else None
    if not pid:
        conn.close()
        raise HTTPException(status_code=400, detail="Product not found")
    cur.execute("DELETE FROM cart_items WHERE cart_id = ? AND product_id = ?", (cart_id, pid))
    conn.commit()
    conn.close()
    return {"msg": "Removed"}


@app.get('/products/resolve')
def resolve_product(name: str):
    conn = get_db()
    cur = conn.cursor()
    # try numeric id first
    try:
        pid = int(name)
        cur.execute("SELECT id, name, price FROM products WHERE id = ?", (pid,))
        r = cur.fetchone()
        conn.close()
        if not r:
            raise HTTPException(status_code=404, detail="Product not found")
        return dict(r)
    except Exception:
        # try exact name first
        cur.execute("SELECT id, name, price FROM products WHERE name = ? LIMIT 1", (name,))
        r = cur.fetchone()
        if not r:
            # try partial match
            cur.execute("SELECT id, name, price FROM products WHERE name LIKE ? LIMIT 1", (f'%{name}%',))
            r = cur.fetchone()
        conn.close()
        if not r:
            raise HTTPException(status_code=404, detail="Product not found")
        return dict(r)


class CartUpdate(BaseModel):
    product_id: str
    quantity: int


@app.post('/me/cart/update')
def update_cart(item: CartUpdate, current_user: dict = Depends(get_current_user)):
    user_id = current_user['id']
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT id FROM carts WHERE user_id = ? ORDER BY id DESC LIMIT 1", (user_id,))
    cart = cur.fetchone()
    if not cart:
        conn.close()
        raise HTTPException(status_code=400, detail='No cart')
    cart_id = cart['id']
    # resolve product id
    try:
        pid = int(item.product_id)
    except Exception:
        cur.execute("SELECT id FROM products WHERE name = ? LIMIT 1", (item.product_id,))
        r = cur.fetchone()
        pid = r['id'] if r else None
    if not pid:
        conn.close()
        raise HTTPException(status_code=400, detail='Product not found')
    if item.quantity <= 0:
        cur.execute("DELETE FROM cart_items WHERE cart_id = ? AND product_id = ?", (cart_id, pid))
    else:
        cur.execute("SELECT id FROM cart_items WHERE cart_id = ? AND product_id = ?", (cart_id, pid))
        existing = cur.fetchone()
        if existing:
            cur.execute("UPDATE cart_items SET quantity = ? WHERE id = ?", (item.quantity, existing['id']))
        else:
            cur.execute("INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)", (cart_id, pid, item.quantity))
    conn.commit()
    conn.close()
    return { 'msg': 'Updated' }

class CheckoutPayload(BaseModel):
    server: Optional[str] = None
    uid: Optional[str] = None
    nickname: Optional[str] = None


@app.post("/me/checkout")
def checkout(payload: CheckoutPayload, current_user: dict = Depends(get_current_user)):
    user_id = current_user["id"]
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT id FROM carts WHERE user_id = ? ORDER BY id DESC LIMIT 1", (user_id,))
    cart = cur.fetchone()
    if not cart:
        conn.close()
        raise HTTPException(status_code=400, detail="Cart not found")
    cart_id = cart["id"]
    cur.execute("""
        SELECT product_id, quantity, price
        FROM cart_items
        JOIN products ON cart_items.product_id = products.id
        WHERE cart_id = ?
    """, (cart_id,))
    items = cur.fetchall()
    if not items:
        conn.close()
        raise HTTPException(status_code=400, detail="Cart is empty")
    total = sum(row["price"] * row["quantity"] for row in items)
    # Проверка баланса (используем поле balance)
    user_balance = 0
    if isinstance(current_user, dict):
        user_balance = current_user.get('balance', 0)
    else:
        user_balance = current_user['balance'] if 'balance' in current_user.keys() else 0
    if (user_balance or 0) < total:
        conn.close()
        raise HTTPException(status_code=400, detail="Insufficient balance")
    # Создать заказ
    cur.execute("INSERT INTO orders (user_id, total, status, server, uid, nickname) VALUES (?, ?, ?, ?, ?, ?)", (user_id, total, "processing", payload.server, payload.uid, payload.nickname))
    order_id = cur.lastrowid
    for row in items:
        cur.execute("INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)", (order_id, row["product_id"], row["quantity"]))
    # Списать баланс
    # списываем из balance
    cur.execute("UPDATE users SET balance = balance - ? WHERE id = ?", (total, user_id))
    # Очистить корзину
    cur.execute("DELETE FROM cart_items WHERE cart_id = ?", (cart_id,))
    conn.commit()
    conn.close()
    return {"msg": "Order placed", "order_id": order_id, "server": payload.server, "uid": payload.uid, "nickname": payload.nickname}


@app.post('/me/checkout/item')
def checkout_item_raw(data: dict = Body(...), current_user: dict = Depends(get_current_user)):
    user_id = current_user['id']
    conn = get_db()
    cur = conn.cursor()
    product_id_raw = data.get('product_id')
    quantity = int(data.get('quantity') or 1)
    # resolve product id
    pid = None
    try:
        pid = int(product_id_raw)
    except Exception:
        cur.execute("SELECT id FROM products WHERE name = ? LIMIT 1", (product_id_raw,))
        r = cur.fetchone()
        pid = r['id'] if r else None
    if not pid:
        conn.close()
        raise HTTPException(status_code=400, detail='Product not found')
    # get product price
    cur.execute("SELECT price FROM products WHERE id = ?", (pid,))
    prod = cur.fetchone()
    if not prod:
        conn.close()
        raise HTTPException(status_code=400, detail='Product not found')
    price = prod['price']
    total = price * (quantity or 1)
    # check balance
    user_balance = current_user.get('balance', 0) if isinstance(current_user, dict) else (current_user['balance'] if 'balance' in current_user.keys() else 0)
    if (user_balance or 0) < total:
        conn.close()
        raise HTTPException(status_code=400, detail='Insufficient balance')
    # create order
    cur.execute("INSERT INTO orders (user_id, total, status) VALUES (?, ?, ?)", (user_id, total, 'processing'))
    order_id = cur.lastrowid
    cur.execute("INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)", (order_id, pid, quantity))
    # deduct balance
    cur.execute("UPDATE users SET balance = balance - ? WHERE id = ?", (total, user_id))
    # remove cart item if exists
    cur.execute("SELECT id FROM carts WHERE user_id = ? ORDER BY id DESC LIMIT 1", (user_id,))
    cart = cur.fetchone()
    if cart:
        cur.execute("DELETE FROM cart_items WHERE cart_id = ? AND product_id = ?", (cart['id'], pid))
    conn.commit()
    conn.close()
    return { 'msg': 'Order placed', 'order_id': order_id }

@app.get("/me/orders")
def get_orders(current_user: dict = Depends(get_current_user)):
    user_id = current_user["id"]
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC", (user_id,))
    orders = cur.fetchall()
    result = []
    for order in orders:
        cur.execute("""
            SELECT products.name, order_items.quantity
            FROM order_items
            JOIN products ON order_items.product_id = products.id
            WHERE order_items.order_id = ?
        """, (order["id"],))
        items = cur.fetchall()
        result.append({
            "order_id": order["id"],
            "total": order["total"],
            "status": order["status"],
            "server": order.get("server") if isinstance(order, dict) else order["server"],
            "uid": order.get("uid") if isinstance(order, dict) else order["uid"],
            "nickname": order.get("nickname") if isinstance(order, dict) else order["nickname"],
            "created_at": order["created_at"],
            "items": [dict(i) for i in items]
        })
    conn.close()
    return result

@app.get("/admin/purchases")
def all_purchases():
    # Простая админ-ручка: возвращает все заказы и кто их сделал
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT orders.id, orders.user_id, orders.total, orders.status, orders.created_at, users.email FROM orders JOIN users ON orders.user_id = users.id ORDER BY orders.created_at DESC")
    orders = cur.fetchall()
    result = []
    for order in orders:
        cur.execute("""
            SELECT products.name, order_items.quantity
            FROM order_items
            JOIN products ON order_items.product_id = products.id
            WHERE order_items.order_id = ?
        """, (order["id"],))
        items = cur.fetchall()
        result.append({
            "order_id": order["id"],
            "user_id": order["user_id"],
            "email": order["email"],
            "total": order["total"],
            "status": order["status"],
            "server": order.get("server") if isinstance(order, dict) else order["server"],
            "uid": order.get("uid") if isinstance(order, dict) else order["uid"],
            "nickname": order.get("nickname") if isinstance(order, dict) else order["nickname"],
            "created_at": order["created_at"],
            "items": [dict(i) for i in items]
        })
    conn.close()
    return result
