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
	table_str = "CREATE TABLE IF NOT EXISTS " + table_name + " (id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(), " + columns + ")"
	with conn.cursor() as cur:
		cur.execute(table_str)
		conn.commit()


def delete_table(conn, table_name: str):
	table_str = "DROP TABLE IF EXISTS " + table_name
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


# delete_table(service, "Producer")
# delete_table(service, "Produce")
create_table(service, table_name = "producer", columns = "name STRING, location STRING")
create_table(service, table_name = "produce", columns = "name STRING, Stock INT, id_producers UUID")
create_table(service, table_name = "menu_items", columns = "old_price DECIMAL, new_price DECIMAL, max_listed INT, id_producers UUID")
create_table(service, table_name = "menu_produce_bridge", columns = "produce_units INT, id_menu_item UUID, id_produce UUID")

show_tables(service)
#
# show_columns(service, "Producer")
# show_columns(service, "Produce")
