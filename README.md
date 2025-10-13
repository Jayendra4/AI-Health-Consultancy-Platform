# 🧠 AI Health Consultancy Platform — Swasthya Saathi

AI-powered health consultancy: generate concise wellness reports, chat with an AI assistant, and manage your report history with exports — all in a modern, responsive UI.

## 🎥 Demo
- Video: https://streamable.com/r2o8o1
- Live (optional): add your deployed URL here

## 📸 Screenshots
- Starting Page
  <img width="1000" alt="Starting Page" src="https://github.com/user-attachments/assets/85dc7f31-2def-431b-8e22-4db03d6f3a98" />
- Create Account
  <img width="1000" alt="Create Account Page" src="https://github.com/user-attachments/assets/c78747e1-98fc-45a2-9130-e7db726e3fd2" />
- Login
  <img width="1000" alt="Login Page" src="https://github.com/user-attachments/assets/5a757603-6fcb-483d-a34b-4111879723a9" />
- Dashboard
  <img width="1000" alt="Dashboard" src="https://github.com/user-attachments/assets/353b9336-88f7-48b1-83bd-a1a276e615d6" />
- AI Chat / Report
  <img width="1000" alt="Report / Chat" src="https://github.com/user-attachments/assets/42e34e83-05da-419f-a8d3-cdd1680c8ed2" />

## 🚀 Overview

This platform lets users:

- **Generate AI health reports** (Groq LLM) with BMI/BMR context
- **Chat with an AI assistant** about their health data
- **View, download (PDF/TXT), and delete reports**
- **Use a polished, responsive UI** with glassmorphism visuals

## 🌟 Features

| Category | Details |
|----------|---------|
| 🧠 **AI Integration** | Personalized wellness reports using Groq AI |
| 💬 **Interactive Chat** | Real-time messaging with an AI health assistant |
| 🔐 **Secure Auth** | JWT-based login with bcrypt password hashing |
| 📈 **Health Tools** | Live BMI, BMR, and other health metric calculators |
| 🧾 **Report Tools** | View history, download as PDF/TXT, delete reports |
| 🎨 **Modern UI/UX** | Glassmorphism design, GSAP animations, WebGL interactions |
| 📱 **Responsive Design** | Mobile-first and desktop-ready design |

## 🧰 Tech Stack

### 🔗 Backend
- **Node.js**, **Express.js**
- **MongoDB Atlas**, **Mongoose**
- **JWT**, **bcryptjs**
- **Groq AI API**
- **jsPDF**

### 🎨 Frontend
- **React.js**, **Tailwind CSS**
- **GSAP**, **Framer Motion**
- **ogl** (WebGL)
- **React Router**, **React Hook Form**
- **Axios**

## 📦 Project Structure

```
ai-health-consultancy-platform/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── .env.example
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       └── App.js
├── README.md
└── .gitignore
```

## ⚙️ Installation & Setup

### ✅ Prerequisites
- **Node.js** (v14+)
- **npm** or **Yarn**
- **Git**

### 🔍 Step-by-Step Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ai-health-consultancy-platform.git
cd ai-health-consultancy-platform
```

#### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
```

#### 3. Frontend Setup
```bash
cd ../frontend
npm install
cp .env.example .env
```

## 🔐 Environment Variables

### 🔙 Backend .env
```env
MONGODB_URI=your_mongodb_connection_string
DB_NAME=ai_health_consultancy

JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key

PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### 🔜 Frontend .env
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_NAME=AI Health Consultancy Platform
```

## 🔑 API Keys Setup

### 🧬 MongoDB Atlas
1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster and get the connection string
3. Whitelist your IP and create a user
4. Replace `MONGODB_URI` with your connection string

### 🧠 Groq AI API
1. Sign up at [Groq Console](https://console.groq.com/)
2. Generate an API key
3. Add it to `GROQ_API_KEY` in .env

### 🔐 JWT Secret
Generate using:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

## 💻 Running the Application

### 🧪 Development Mode
```bash
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm start
```
- **Frontend** → http://localhost:3000
- **Backend** → http://localhost:5000

### 🏗 Production Mode
```bash
cd frontend
npm run build

cd ../backend
npm start
```

## 🌐 API Endpoints

### 🧑 Authentication
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT

### 📄 Health Reports
- `POST /api/reports/generate` — Generate new AI report
- `GET /api/reports/history` — Retrieve report history
- `GET /api/reports/:id` — Retrieve a single report
- `GET /api/reports/download/:id/:format` — Download report in PDF or TXT
- `DELETE /api/reports/:id` — Delete a report

### 💬 Chat System
- `POST /api/chat/message` — Send message to AI
  (conversations are stored per session)

## 🎨 UI Components Highlights

| Component | Purpose |
|-----------|---------|
| **TextType** | Typing animation using GSAP |
| **RippleGrid** | WebGL-based interactive background |
| **ProfileDropdown** | User profile actions and logout |
| **DownloadModal** | Report format selector for downloading |
| **ChatInterface** | Real-time AI chat interface |

## 🔐 Security Measures

- **bcryptjs**: Secure password hashing
- **JWT**: Stateless authentication tokens
- **CORS**: Restricted API access to frontend
- **Environment Variables**: No hardcoded sensitive data
- **Middleware**: Route protection using token verification

Planned: password reset via email, rate limiting, centralized error handler.

## 🚀 Deployment Guide

### Suggested Platforms

| Component | Platform Suggestions |
|-----------|---------------------|
| **Backend** | Render, Railway, Heroku, DigitalOcean |
| **Frontend** | Vercel, Netlify, Render |
| **Database** | MongoDB Atlas (Cloud-native and free tier) |

Ensure production .env files are correctly configured, and MongoDB access IPs are allowed.

## 🤝 Contributing

Contributions are welcome! 🛠

```bash
# Steps to contribute:
1. Fork this repository
2. Create a feature branch: git checkout -b feature/your-feature
3. Commit your changes: git commit -m "Add feature"
4. Push to the branch: git push origin feature/your-feature
5. Open a Pull Request 🚀
```

## 👤 Author

Harsh Shringi
- **GitHub**: [@Dev-Harsh773](https://github.com/Dev-Harsh773)
- **LinkedIn**: https://www.linkedin.com/in/harsh073/
- **Email**: krishringi123@gmail.com

## 🙏 Acknowledgments

- [Groq AI](https://groq.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [GSAP](https://greensock.com/gsap/)
- [Tailwind CSS](https://tailwindcss.com/)
