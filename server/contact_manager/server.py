from flask import Flask
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

external_link = os.getenv('EXTERNAL_LINK')
api_key = os.getenv('API_KEY')

print(f"External link: {external_link}")
print(f"API Key: {api_key}")


app = Flask(__name__)
CORS(app)

@app.route('/contact')
def contact():
    pass


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
