#!/usr/bin/pytho3
""" lists all states from a given database sorted in ascending order by id, username, password and database names are given as user args.
"""
import sys
import MySQLdb

if __name__ == '__main__':
    db = MySQLdb.connect(user=sys.argv[1],
            passwd=sys.argv[2],
            db=sys.argv[3],
            host='localhost',
            port=3308)
    cursor = db.cursor()

    cursor.execute("SELECT * FROM states ORDER BY id ASC")

    data = cursor.fetchall()

    for row in data:
        print(row)

        cursor.close()
        db.close()
