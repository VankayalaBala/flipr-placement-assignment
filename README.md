# Real Estate Landing Page - Flipr Placement Assignment

This is a full-stack web application built for the Flipr Hackathon/Placement Assignment. It consists of a responsive landing page for a Real Estate company with a functional lead generation form connected to a Python Flask backend.

## 🚀 Live Demo
- **Frontend (Live Site):** [https://flipr-placement-assignment.vercel.app](https://flipr-placement-assignment.vercel.app)
- **Backend (API):** [https://flipr-backend-j8qz.onrender.com](https://flipr-backend-j8qz.onrender.com)
- **GitHub Repository:** [https://github.com/VankayalaBala/flipr-placement-assignment](https://github.com/VankayalaBala/flipr-placement-assignment)

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Vite, CSS3 (Responsive Design)
- **Backend:** Python, Flask, Flask-CORS
- **Deployment:** Vercel (Frontend), Render (Backend)
- **Version Control:** Git & GitHub

---

## ✨ Features
- **Responsive Design:** Optimized for Desktop and Mobile views.
- **Lead Generation Form:** Captures Name, Email, and Phone Number.
- **Backend Integration:** Data is sent to a live Flask server via a REST API.
- **Form Validation:** Prevents empty submissions and provides user feedback (Success/Error alerts).
- **CORS Enabled:** Secure communication between the hosted frontend and backend.

---

## ⚙️ Local Setup Instructions

If you want to run this project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone [https://github.com/VankayalaBala/flipr-placement-assignment.git](https://github.com/VankayalaBala/flipr-placement-assignment.git)
cd flipr-placement-assignment

### 2. Backend Setup (Python/Flask)
Navigate to the backend folder and install dependencies:
cd backend
python -m venv venv
# Windows:
venv\Scripts\activate
# Mac/Linux:
# source venv/bin/activate

pip install -r requirements.txt
python app.py

The backend will run on http://127.0.0.1:5000

### 3. Frontend Setup (React)
Open a new terminal, navigate to the frontend folder, and start the app:
cd frontend
npm install
npm run dev

The frontend will run on http://localhost:5173

📂 Project Structure

flipr-placement-assignment/
├── backend/
│   ├── app.py              # Flask Application Entry Point
│   ├── requirements.txt    # Python Dependencies
│   ├── Procfile            # Render Deployment Config
│   └── venv/               # Virtual Environment (Ignored)
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # Main React Component
│   │   ├── App.css         # Styling
│   │   └── assets/         # Images and Icons
│   ├── package.json        # Node.js Dependencies
│   └── vite.config.js      # Vite Configuration
│
└── README.md               # Project Documentation


📬 API Endpoints
POST /api/submit

Handles the form submission from the landing page.

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}

Response:
{
  "message": "Lead submitted successfully!",
  "lead": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890"
  }
}