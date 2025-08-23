import sqlite3
import pathlib

SCHEMA_FILE = pathlib.Path(__file__).parent / "schema.sql"
DB_FILE = pathlib.Path(__file__).parent / "app.db"

def init_db():
    sql = SCHEMA_FILE.read_text()
    conn = sqlite3.connect(DB_FILE)
    cur = conn.cursor()
    cur.executescript(sql)
    # Добавим несколько продуктов demo, включая имена, которые использует фронтенд
    products = [
        (1, '980 Кристаллов сотворения', 980.0),
        (2, 'Благословение полой луны', 300.0),
        (3, '980 Онериковых осколков', 980.0),
        (4, 'Жемчужный гимн', 635.0),
        (5, '980 Моноскипов', 980.0),
        (6, 'Пропуск экспресса', 300.0),
        # Game sections ids (string-like names used by components)
        (10, 'genshin-crystal-6480', 6400.0),
        (11, 'genshin-crystal-3280', 3280.0),
        (12, 'genshin-crystal-1980', 1980.0),
        (13, 'genshin-crystal-980', 980.0),
        (14, 'genshin-crystal-300', 300.0),
        (15, 'genshin-crystal-60', 60.0),
        (16, 'genshin-subscription', 300.0),
        (17, 'genshin-bp-basic', 635.0),
        (18, 'genshin-bp-premium', 1250.0)
    ]
    # Additional popular items used in frontend (Russian names)
    extra = [
        (20, '980 Кристаллов сотворения', 980.0),
        (21, 'Благословение полой луны', 300.0),
        (22, '980 Онериковых осколков', 980.0)
    ]
    for pid, name, price in extra:
        cur.execute("INSERT OR IGNORE INTO products (id, name, price) VALUES (?, ?, ?)", (pid, name, price))
    for pid, name, price in products:
        cur.execute("INSERT OR IGNORE INTO products (id, name, price) VALUES (?, ?, ?)", (pid, name, price))
    conn.commit()
    conn.close()

if __name__ == '__main__':
    init_db()
    print('DB initialized at', DB_FILE)
