"""
Created on 2021-08-21
Author: Aryan Gajelli
"""
import psycopg2

service = psycopg2.connect(
	database = 're-fresh-3057.refresh_backend',
	user = 'aryan',
	password = '4659Dwarriors',
	sslmode = 'require',
	sslrootcert = 'certs/ca.crt',
	sslkey = 'certs/client.maxroach.key',
	sslcert = 'certs/client.maxroach.crt',
	port = 26257,
	host = 'free-tier.gcp-us-central1.cockroachlabs.cloud'
)


def show_tables(conn):
	with conn.cursor() as cur:
		cur.execute("SHOW TABLES FROM refresh_backend")
		rows = cur.fetchall()
		conn.commit()
		for row in rows:
			print(row)


def create_table(conn, table_name: str, columns: str):
	table_str = "CREATE TABLE IF NOT EXISTS " + table_name + " (" + columns + ")"
	with conn.cursor() as cur:
		cur.execute(table_str)
		conn.commit()


def show_columns(conn, table_name: str):
	with conn.cursor() as cur:
		cur.execute("SHOW COLUMNS FROM " + table_name)
		rows = cur.fetchall()
		conn.commit()
		for row in rows:
			print(row)


create_table(service, table_name = "Produce", columns = "id INT PRIMARY KEY, Name STRING, Location STRING")
create_table(service, table_name = "Producer", columns = "id INT PRIMARY KEY, Name STRING, Stock INT, id_Producers INT")

show_tables(service)