# Contact Manager

A modern **Contact Manager** application built using a **React** client-side and a **Python (Flask)** server-side. This project demonstrates a full-stack application designed to manage contact information, allowing users to add, view, edit, delete, and search for contacts through a user-friendly interface. It showcases the seamless integration of front-end and back-end technologies, offering a practical example of a CRUD (Create, Read, Update, Delete) application.

## 🌐 Live Demo
- **Client**: [https://contact-manager-blond.vercel.app/](https://contact-manager-blond.vercel.app/)
- **Server**: [https://contact-manager-kvur.onrender.com](https://contact-manager-kvur.onrender.com)

## 🌟 Project Overview

The **Contact Manager** aims to provide a simple yet powerful solution for managing contact information. It allows users to:
- **Add new contacts** with details like name, email, city, and address.
- **View contact details** in a clear and structured format.
- **Search contacts** using a search bar.
- **Favorite contacts** for quick access.
- **Edit and delete contacts** directly from the interface.
- **Responsive Design**: The application is fully responsive and adapts to different screen sizes, making it suitable for both desktop and mobile use.

This project is a practical demonstration of building a full-stack web application using modern technologies, providing insight into how client-side and server-side components can interact seamlessly.

## 🛠️ Technologies Used

### Client Side (React)
- **React**: A JavaScript library used to build the dynamic user interface.
- **Fetch API**: For making HTTP requests to the server.
- **CSS and Bootstrap**: To style the application and make it responsive.
- **State Management**: Using React's `useState` and `useEffect` hooks to manage component state, handle form inputs, and fetch data from the server.

### Server Side (Flask)
- **Python (Flask)**: A lightweight WSGI web application framework used to build the server and create RESTful API endpoints.
- **Flask-CORS**: To handle Cross-Origin Resource Sharing, allowing the React client to communicate with the Flask server.
- **PostgreSQL**: A relational database used to store and manage contact data.
- **psycopg2**: A PostgreSQL database adapter for Python, used to interact with the database.
- **Environment Variables**: Managed using Python's `os` and `dotenv` modules for secure database connection.

## ⚙️ Project Structure

### 1. Client (React)
The client-side is built using React, focusing on creating an intuitive user interface that interacts with the server to perform CRUD operations.

**Key Components:**
- **Form**: A form to add new contacts with fields for name, email, city, and address.
- **Contact**: Displays the details of the selected contact.
- **Side**: The sidebar where contacts are listed, including functionalities for searching, favoriting, and deleting contacts.
- **Home**: The main component that ties all other components together and manages the application's state.

**React Features Used:**
- **React Hooks**: Utilized `useState` for managing state and `useEffect` for data fetching.
- **Dynamic UI**: Implements real-time updates to the contact list using state and props.
- **Responsive Design**: Uses CSS and media queries to ensure the application is mobile-friendly.

### 2. Server (Flask)
The server-side is implemented using Flask, providing a RESTful API to handle client requests and interact with the PostgreSQL database.

**Key Features:**
- **Flask**: A simple yet powerful web framework used to define API endpoints for managing contacts.
- **PostgreSQL**: A robust, open-source relational database used to store contact information.
- **CRUD API**:
  - **GET** `/contact`: Fetches the list of contacts from the database.
  - **POST** `/addContact`: Adds a new contact to the database.
  - **DELETE** `/contact/<id>`: Deletes a contact by ID.
- **CORS**: Uses `flask_cors` to allow the React client to communicate with the Flask server across different domains.
- **Environment Variables**: The connection string for the PostgreSQL database is managed securely using environment variables loaded through the `.env` file.

### 📁 Directory Structure

```
Contact-Manager/
│
├── client/               # React client-side code
│   ├── public/
│   ├── src/
│   │   ├── components/   # React components (Form, Side, Contact, etc.)
│   │   ├── App.js        # Main React application
│   │   ├── index.js      # Entry point for React app
│   │   ├── styles/       # CSS files
│   │   └── ...
│   ├── package.json      # Client dependencies
│   └── ...
│
├── server/               # Flask server-side code
│   ├── contact_manager/  # Main module
│   │   ├── server.py     # Main Flask application
│   ├── .env              # Environment variables
│   ├── requirements.txt  # Server dependencies
│   └── ...
│
└── README.md             # Documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** and **npm** installed for the client.
- **Python 3.x** and **pip** installed for the server.
- **PostgreSQL** database set up.
- **Git** installed for version control.

### 1. Clone the Repository
```bash
git clone https://github.com/Abubakar-Meigag/Contact-Manager.git
cd Contact-Manager
```

### 2. Set Up the Server (Flask)
- Navigate to the `server` directory:
  ```bash
  cd server
  ```
- Create and activate a virtual environment:
  ```bash
  python -m venv venv
  source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
  ```
- Install dependencies:
  ```bash
  pip install -r requirements.txt
  ```
- Set up environment variables in `.env`:
  ```plaintext
  EXTERNAL_DATA_LINK=your_postgresql_connection_string
  ```
- Run the server:
  ```bash
  flask run
  ```

### 3. Set Up the Client (React)
- Navigate to the `client` directory:
  ```bash
  cd ../client
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the React application:
  ```bash
  npm start
  ```

### 4. Access the Application
- The live server is deployed at: [https://contact-manager-kvur.onrender.com](https://contact-manager-kvur.onrender.com).
- The live client is deployed at: [https://contact-manager-blond.vercel.app/](https://contact-manager-blond.vercel.app/).

## 📚 Features in Detail

### Client-Side (React)
- **Real-Time Updates**: Using React's state management to handle real-time updates to the contact list.
- **Loading States**: Displays a loading indicator while fetching data from the server.
- **Form Validation**: Ensures that required fields (name, email) are filled before submission.

### Server-Side (Flask)
- **Database Interaction**: Uses PostgreSQL to store, retrieve, and manage contact information.
- **RESTful API**: Implements RESTful routes for creating, reading, and deleting contacts.
- **Error Handling**: Proper error handling for database operations and client requests.

## 🗄️ API Endpoints Overview
- **GET** `/contact`: Fetches all contacts.
- **POST** `/addContact`: Adds a new contact.
- **DELETE** `/contact/<id>`: Deletes a contact by its ID.

## 🤝 Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## 📞 Contact
For any questions or suggestions, please contact: [abubakar.meigag@gmail.com](mailto:abubakar.meigag@gmail.com).


![Screenshot 2024-09-28 at 8 12 10 PM (3)](https://github.com/user-attachments/assets/0a2b3c21-0e9b-44b8-90bd-6c668c531a52)

