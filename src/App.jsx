import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { PageTransition } from './components/layout/PageTransition'
import { AboutHer } from './pages/AboutHer'
import { Home } from './pages/Home'
import { Pictures } from './pages/Pictures'
import './styles/global.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Navbar />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/pictures" element={<PageTransition><Pictures /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutHer /></PageTransition>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
