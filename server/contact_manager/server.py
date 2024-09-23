from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
from flask_cors import CORS
import psycopg2
from psycopg2 import sql


load_dotenv()


app = Flask(__name__)
CORS(app)


def get_db_connection():
    conn = psycopg2.connect(os.getenv("EXTERNAL_DATA_LINK"))
    return conn


@app.route("/contact", methods=["POST"])
def contact():
    data = request.json
    first_name = data.get("first_name")
    last_name = data.get("last_name")
    email = data.get("email")
    city = data.get("city")
    address = data.get("address")
    title = data.get("title")

    if not first_name or not last_name or not title:
        return jsonify({"error": " Missing required fields"}), 400

    try:
        conn = get_db_connection()
        cur = conn.cursor()

        insert_query = sql.SQL(
            """
            INSERT INTO contact (first_name, last_name, email, city, address, title)
            values (%s, %s, %s, %s, %s, %s)
        """
        )

        cur.execute(insert_query, (first_name, last_name, email, city, address, title))
        conn.commit()
        cur.close()
        conn.close()

        return jsonify({"message": "Contact added successfully"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# post contact to table using postgreSQL

# update contact which is in database

# delete contact from the data base table

if __name__ == "__main__":
    app.run()


# from flask import Flask, render_template, request, redirect, url_for
# from flask_cors import CORS, cross_origin


# app = Flask(__name__)
# cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

# # In-memory database to store contacts temporarily (replace with a real database later)
# contacts = []

# @app.route()
# def index():
#     return render_template('index.html', contacts=contacts)

# @app.route('/add', methods=['GET', 'POST'])
# def add_contact():
#     if request.method == 'POST':
#         name = request.form['name']
#         email = request.form['email']
#         phone_number = request.form['phone_number']
#         address = request.form['address']

#         # Add the contact to the in-memory list
#         contacts.append({
#             'name': name,
#             'email': email,
#             'phone_number': phone_number,
#             'address': address
#         })
#         return redirect(url_for('index'))

#     return render_template('add_contact.html')

# if __name__ == '__main__':
#     app.run(debug=True)
