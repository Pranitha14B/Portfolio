import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body from './components/Body'
import Projects from './pages/Projects'
import Aboutme from './pages/Aboutme'
import Contactme from './pages/Contactme'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <Projects />
      case 'about':
        return <Aboutme />
      case 'contact':
        return <Contactme />
      case 'home':
      default:
        return <Body />
    }
  }

  return (
    <div className="app">
      <Navbar onNavigate={setCurrentPage} />
      <div className="body">
        {renderPage()}
      </div>
      <Footer />
    </div>
  )
}
export default App