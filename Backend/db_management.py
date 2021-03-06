"""
Created on 2021-08-21
Author: Aryan Gajelli
"""
import psycopg2
from psycopg2.extras import RealDictCursor
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


def insert_into(conn, table_name: str, columns: str, values: str):
	with conn.cursor() as cur:
		cur.execute("INSERT INTO " + table_name +" " + columns + " VALUES " + values)
	conn.commit()


def read_from(conn, table_name: str, columns: str, where: str = None):
	with conn.cursor() as cur:
		if where:
			cur.execute("SELECT " + columns + " FROM " + table_name + " WHERE " +where)
		else:
			cur.execute("SELECT " + columns + " FROM " + table_name)
		rows = cur.fetchall()
		for row in rows:
			print([str(cell) for cell in row])
		

import json
import random
with open("restaraunts.json", "r") as file:
	rests = json.load(file)


rest_name = "3-way-restaurant-bronx"

with service.cursor() as cur:
	cur.execute("SELECT * FROM producer WHERE name='"+rest_name+"'")
	rest_json = cur.fetchall()[0]
	rest_id = rest_json[0]
	# print(rest_id, rest_json)
# insert_into(service, table_name = "produce", columns = "(name, stock, id_producers)", values = f"('fish (lbs)', '{random.randint(0, 100)}', '{rest_id}')")
		
	# for menu_section in rest['items'][0]['entries']['items']:
	# 	for item in menu_section['entries']['items']:
	# 		insert_into(service, table_name="menu_items", columns="(name, old_price, max_listed, id_producers)",  values=f"('{item['name']}', '{item['price'][1:]}', '{random.randint(0,30)}', '{rest_id}')")
	# insert_into(service, table_name = "producer", columns = "(name, hashed_password, Location)", values = "('"+key+"', 'fakehash', 'loc')")

# delete_table(service, "producer")
# delete_table(service, "menu_items")

# create_table(service, table_name = 'consumer', columns = "name STRING, hashed_password BYTES")
#
# create_table(service, table_name = "producer", columns = "name STRING, hashed_password BYTES, location STRING")
# create_table(service, table_name = "produce", columns = "name STRING, Stock INT, id_producers UUID")
# create_table(service, table_name = "menu_items", columns = "name STRING, old_price DECIMAL, new_price DECIMAL, max_listed INT, id_producers UUID")
# create_table(service, table_name = "menu_produce_bridge", columns = "produce_units INT, id_menu_item UUID, id_produce UUID")
# create_table(service, table_name = "transactions", columns = "units INT, price DECIMAL, time TIMESTAMP, id_menu_item UUID")


read_from(service, table_name = "produce", columns = "*", where=f"id_producers = '{rest_id}'")
# show_tables(service)
#
# show_columns(service, "transactions")
# show_columns(service, "Produce")
