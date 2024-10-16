import sqlite3

# Connect to the database (it will create it if it doesn't exist)
conn = sqlite3.connect('reservations.db')

# Create a cursor object
cursor = conn.cursor()

# Create a table for storing reservations
cursor.execute('''
CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    room_type TEXT NOT NULL,
    guests INTEGER NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL
)
''')

# Commit changes and close the connection
conn.commit()
conn.close()
