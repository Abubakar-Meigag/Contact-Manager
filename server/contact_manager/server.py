from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
from flask_cors import CORS
import psycopg2
from psycopg2 import sql


load_dotenv()


app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Hello, this is your Flask app running on Render & EC2 instance!"

def get_db_connection():
    conn = psycopg2.connect(os.getenv("EXTERNAL_DATA_LINK"))
    return conn


@app.route("/addContact", methods=["POST"])
def contact():
    data = request.json
    first_name = data.get("first_name")
    last_name = data.get("last_name")
    email = data.get("email")
    city = data.get("city")
    address = data.get("address")
    title = data.get("title")

    if not first_name or not last_name or not title:
        return jsonify({"error": "Missing required fields"}), 400

    try:
        conn = get_db_connection()
        cur = conn.cursor()

        insert_query = sql.SQL(
            """
            INSERT INTO contact (first_name, last_name, email, city, address, title)
            VALUES (%s, %s, %s, %s, %s, %s) RETURNING id
            """
        )

        cur.execute(insert_query, (first_name, last_name, email, city, address, title))
        new_contact_id = cur.fetchone()[0]
        conn.commit()

        new_contact = {
            "id": new_contact_id,
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "city": city,
            "address": address,
            "title": title,
        }

        cur.close()
        conn.close()

        return jsonify(new_contact), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# get data from database using endpoint
@app.route("/contact", methods=["GET"])
def get_contact():
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        # Fetch all data from the "contact" table
        cur.execute(
            "SELECT id, title, first_name, last_name, email, city, address FROM contact"
        )
        rows = cur.fetchall()

        # Define a structure for the result
        contacts = []
        for row in rows:
            contact = {
                "id": row[0],
                "title": row[1],
                "first_name": row[2],
                "last_name": row[3],
                "email": row[4],
                "city": row[5],
                "address": row[6],
            }
            contacts.append(contact)

        cur.close()
        conn.close()

        # Return the data as JSON
        return jsonify(contacts), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# update contact which is in database
@app.route("/contact/<int:id>", methods=["PUT"])
def update_contact(id):
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        # Get the data from the request
        data = request.json

        # Prepare the SQL query to update the contact fields that are provided in the request
        fields_to_update = []
        values = []

        if "first_name" in data:
            fields_to_update.append("first_name = %s")
            values.append(data["first_name"])
        if "last_name" in data:
            fields_to_update.append("last_name = %s")
            values.append(data["last_name"])
        if "email" in data:
            fields_to_update.append("email = %s")
            values.append(data["email"])
        if "city" in data:
            fields_to_update.append("city = %s")
            values.append(data["city"])
        if "address" in data:
            fields_to_update.append("address = %s")
            values.append(data["address"])
        if "title" in data:
            fields_to_update.append("title = %s")
            values.append(data["title"])

        # Ensure there's something to update
        if not fields_to_update:
            return jsonify({"error": "No fields to update"}), 400

        # Create the SQL query for the update
        query = f"UPDATE contact SET {', '.join(fields_to_update)} WHERE id = %s"
        values.append(id)

        # Execute the update query
        cur.execute(query, values)
        conn.commit()

        cur.close()
        conn.close()

        return jsonify({"message": "Contact updated successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Delete contact by ID from the database
@app.route("/contact/<int:id>", methods=["DELETE"])
def delete_contact(id):
    try:
        # Establish a database connection
        conn = get_db_connection()
        cur = conn.cursor()

        # Execute the delete query
        cur.execute("DELETE FROM contact WHERE id = %s", (id,))

        # Commit the changes to the database
        conn.commit()

        # Close the cursor and connection
        cur.close()
        conn.close()

        # Check if any rows were deleted
        if cur.rowcount == 0:
            return jsonify({"error": "Contact not found"}), 404

        return jsonify({"message": "Contact deleted successfully"}), 200

    except Exception as err:
        return jsonify({"error": str(err)}), 500


if __name__ == "__main__":
    app.run(debug=True)



    # app.run(host='0.0.0.0', port=5000)
