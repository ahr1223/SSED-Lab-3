import { useState, useEffect } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

function App() {
  const [user, setUser] = useState(null)
  const [currentView, setCurrentView] = useState('login')

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    if (token && userData) {
      setUser(JSON.parse(userData))
      setCurrentView('dashboard')
    }
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    setCurrentView('dashboard')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    setCurrentView('login')
  }

  return (
    <div className="App">
      {currentView === 'login' && (
        <Login onLogin={handleLogin} onSwitchToRegister={() => setCurrentView('register')} />
      )}
      {currentView === 'register' && (
        <Register onRegister={handleLogin} onSwitchToLogin={() => setCurrentView('login')} />
      )}
      {currentView === 'dashboard' && user && (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  )
}

export default App
