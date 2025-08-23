Проект: backend для аутентификации, корзины и заказов (FastAPI + SQLite)

Запуск и инициализация:

1. Рекомендуется создать виртуальное окружение и установить зависимости:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

2. Инициализируйте базу данных:

```bash
python db/init_db.py
```

3. Запустите сервер разработки:

```bash
uvicorn main:app --reload
```

Эндпоинты:

- POST /register {email, password}
- POST /token form-data (username=email, password) => access_token
- GET /me/profile (bearer token)
- GET /me/cart (bearer token)
- POST /me/cart/add {product_id, quantity} (bearer token)
- POST /me/cart/remove?product_id=ID (bearer token)
- POST /me/checkout (bearer token)
- GET /me/orders (bearer token)
- GET /admin/purchases

Примечание: измените SECRET_KEY в `main.py` перед деплоем.
