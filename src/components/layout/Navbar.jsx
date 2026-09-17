import { Heart } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Pictures', to: '/pictures' },
  { label: 'About Her', to: '/about' },
]

export function Navbar() {
  return (
    <header className="navbar">
      <NavLink className="brand" to="/" aria-label="Go to home">
        <Heart size={18} fill="currentColor" />
        <span>ours, softly</span>
      </NavLink>
      <nav aria-label="Main navigation">
        {links.map((link) => (
          <NavLink key={link.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={link.to} end={link.to === '/'}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
