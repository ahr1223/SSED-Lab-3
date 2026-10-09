# TaskFlow - Professional Task Management Dashboard

A full-stack task management application with a modern professional dashboard UI, built with React, Node.js, Express, MongoDB Atlas, and Docker.

![TaskFlow](https://img.shields.io/badge/TaskFlow-Dashboard-blue)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-20.0.0-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED)

## 🚀 Features

- **Professional Dashboard UI** - Modern dark theme with sidebar navigation
- **Statistics Cards** - Real-time task statistics (Total, Pending, In Progress, Completed)
- **User Authentication** - Secure login and registration with JWT
- **Task Management** - Create, Read, Update, Delete tasks
- **Status Tracking** - Track task status (Pending, In Progress, Completed)
- **Responsive Design** - Mobile-friendly layout
- **Docker Containerized** - Easy deployment with Docker
- **MongoDB Atlas** - Cloud database integration

## 🛠️ Tech Stack

### Frontend
- React 18.2.0
- Vite 5.0.0
- React Router DOM 6.20.0
- Nginx (for serving production build)

### Backend
- Node.js 20.0.0
- Express 4.18.2
- Mongoose 7.6.3
- bcryptjs 2.4.3
- jsonwebtoken 9.0.2
- cors 2.8.5

### Database
- MongoDB Atlas (Cloud MongoDB)

### DevOps
- Docker & Docker Compose
- Docker Network for container communication

## 📋 Prerequisites

- Docker Desktop installed and running
- MongoDB Atlas account with a free cluster
- Git

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ahr1223/SSED-Lab-3.git
cd SSED-Lab-3
```

### 2. MongoDB Atlas Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier)
3. Create a database user with username and password
4. **Important**: Whitelist your IP address:
   - Go to Network Access → IP Whitelist
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (adds `0.0.0.0/0`)
   - Click Confirm
5. Get your connection string from the Atlas dashboard

### 3. Configure Environment Variables

Create a `.env` file in the `Backend` directory:

```env
PORT=3000
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.bhwbncs.mongodb.net/?appName=Cluster0
JWT_SECRET=your-secret-key-here
```

**Note**: Replace `YOUR_USERNAME` and `YOUR_PASSWORD` with your MongoDB Atlas credentials. If your password contains special characters like `@`, URL-encode them (e.g., `@` becomes `%40`).

### 4. Build Docker Images

```bash
# Build backend image
cd Backend
docker build -t taskflow-backend:1.0 -f Dockerfile .

# Build frontend image
cd ../Frontend
docker build -t taskflow-frontend:1.0 -f dockerfile .
```

### 5. Create Docker Network

```bash
docker network create taskflow-net
```

### 6. Run Containers

```bash
# Run backend container
cd ../Backend
docker run -d --name backend --network taskflow-net --env-file .env -p 3000:3000 taskflow-backend:1.0

# Run frontend container
docker run -d --name frontend --network taskflow-net -p 8080:80 taskflow-frontend:1.0
```

## 🌐 Access the Application

- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3000
- **Health Check**: http://localhost:3000/api/health

## 📁 Project Structure

```
SSED-Lab-3/
├── Backend/
│   ├── server.js          # Express server with API routes
│   ├── package.json       # Backend dependencies
│   ├── Dockerfile         # Backend Docker configuration
│   ├── .dockerignore      # Docker ignore file
│   ├── .env.example       # Environment variables template
│   └── .env               # Environment variables (not in git)
├── Frontend/
│   ├── src/
│   │   ├── main.jsx       # React entry point
│   │   ├── App.jsx        # Main app component
│   │   ├── index.css      # Professional dark theme styles
│   │   └── components/
│   │       ├── Login.jsx      # Login component
│   │       ├── Register.jsx   # Registration component
│   │       └── Dashboard.jsx  # Dashboard with task management
│   ├── index.html        # HTML template
│   ├── vite.config.js    # Vite configuration
│   ├── nginx.conf        # Nginx configuration
│   ├── package.json      # Frontend dependencies
│   ├── dockerfile        # Frontend Docker configuration
│   └── .dockerignore     # Docker ignore file
└── README.md             # This file
```

## 🔌 API Endpoints

### Authentication
- `POST /api/register` - Register a new user
- `POST /api/login` - Login user and get JWT token

### Tasks
- `GET /api/tasks` - Get all tasks for authenticated user
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

### Health
- `GET /api/health` - Health check endpoint

## 🎨 UI Features

### Dashboard
- **Sidebar Navigation** - Fixed sidebar with navigation items
- **Statistics Grid** - 4 cards showing task statistics
- **Task Cards** - Modern card-based task display with status indicators
- **Responsive Layout** - Adapts to different screen sizes

### Design System
- **Dark Theme** - Professional dark color scheme
- **Gradient Accents** - Beautiful gradient buttons and icons
- **Smooth Animations** - Hover effects and transitions
- **Modern Typography** - Clean and readable fonts

## 🐳 Docker Commands

### View Running Containers
```bash
docker ps
```

### View Container Logs
```bash
docker logs backend
docker logs frontend
```

### Stop Containers
```bash
docker stop backend frontend
```

### Remove Containers
```bash
docker rm -f backend frontend
```

### Restart Containers
```bash
docker restart backend
docker restart frontend
```

### Remove Docker Network
```bash
docker network rm taskflow-net
```

## 🔒 Security Features

- **Password Hashing** - bcryptjs for secure password storage
- **JWT Authentication** - JSON Web Tokens for secure API access
- **Environment Variables** - Sensitive data stored in .env files
- **CORS Enabled** - Cross-origin resource sharing configured
- **Input Validation** - Form validation on both frontend and backend

## 📝 Usage Guide

### 1. Register an Account
- Open http://localhost:8080
- Click "Create account" on the login page
- Fill in your name, email, and password
- Click "Create Account"

### 2. Login
- Enter your email and password
- Click "Sign In"

### 3. Create Tasks
- Click "New Task" button
- Fill in task title, description, and status
- Click "Create Task"

### 4. Manage Tasks
- **Edit**: Click "Edit" on a task to modify it
- **Delete**: Click "Delete" to remove a task
- **Change Status**: Edit task to change its status

## 🐛 Troubleshooting

### MongoDB Connection Error
If you see "IP not whitelisted" error:
1. Go to MongoDB Atlas → Network Access → IP Whitelist
2. Add `0.0.0.0/0` to allow access from anywhere
3. Restart the backend container: `docker restart backend`

### Docker Desktop Not Running
- Start Docker Desktop from your applications
- Wait for it to fully start before running Docker commands

### Port Already in Use
If ports 3000 or 8080 are already in use:
```bash
# Stop existing containers
docker stop backend frontend
# Remove containers
docker rm -f backend frontend
# Run again
```

### Frontend Not Connecting to Backend
- Ensure both containers are on the same Docker network (`taskflow-net`)
- Check that backend container is running: `docker ps`
- Verify backend logs: `docker logs backend`

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

Created by: ahr1223

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the database solution
- Docker for containerization technology
- Vite for the fast build tool
