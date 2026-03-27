import { useState } from 'react'
import { UserProvider } from './context/UserContext'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import './App.css'

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="main-content">
        {currentPage === 'home' && <Home />}
        {currentPage === 'profile' && <Profile />}
      </main>
    </>
  )
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  )
}

export default App
