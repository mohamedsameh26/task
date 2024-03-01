import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className="logo">Logo</div>
        <div className="links">
            <Link to="/">Slider</Link>
            <Link to="/cart"><span>1</span>Cart</Link>
        </div>
    </nav>
  )
}

export default Navbar