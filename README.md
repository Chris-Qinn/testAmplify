# Simple JS-Python Client-Server App

This is a basic full-stack client-server application with a JavaScript frontend and a Python Flask backend. The app allows users to send a message through the front end, which the backend responds to with a simple echoed message.

---

## 📁 Project Structure

simple-app/
├── client/ # Frontend (JavaScript, HTML)
│ ├── index.html
│ ├── script.js
│ ├── package.json
│ └── node_modules/ # (auto-generated after npm install)
│
├── server/ # Backend (Python Flask)
│ ├── app.py
│ └── requirements.txt


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/simple-app.git
cd simple-app
```

🖥️ Running the Frontend

### 1. Navigate to the client directory:

```bash
cd client
npm install
```

### 2. Start the frontend server:

```bash
npm run start
```

The app will be served at something like http://localhost:3000.


🐍 Running the Backend

### 1. Navigate to the server directory:

```bash
cd server
pip install -r requirements.txt
```

### 2. Start the Flask server:
```bash
python app.py
```

The Flask backend will run at http://localhost:5000.
