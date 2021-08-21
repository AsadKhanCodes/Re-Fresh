"""
Created on 2021-08-21
Author: Aryan Gajelli
"""
import psycopg2

conn = psycopg2.connect(
    database='re-fresh-3057.defaultdb',
    user='aryan',
	password='4659Dwarriors',
    sslmode='require',
    sslrootcert='certs/ca.crt',
    sslkey='certs/client.maxroach.key',
    sslcert='certs/client.maxroach.crt',
    port=26257,
    host='free-tier.gcp-us-central1.cockroachlabs.cloud'
)
pass