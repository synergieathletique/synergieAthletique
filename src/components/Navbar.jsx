import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { site } from '../config'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/massage', label: 'Massage sportif' },
  { to: '/preparation-mentale', label: 'Préparation mentale' },
  { to: '/test-personnalite', label: 'Test de personnalité' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <img src={site.logo} alt={`Logo ${site.name}`} width="52" height="52" />
          <span className="logo-text">
            <span className="logo-kicker">Synergie</span>
            <span className="logo-name">Athlétique</span>
          </span>
        </NavLink>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Fermer' : 'Menu'}
        </button>
        <nav id="menu-principal" className={`nav-links ${open ? 'open' : ''}`} aria-label="Navigation principale">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
            Prendre contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
