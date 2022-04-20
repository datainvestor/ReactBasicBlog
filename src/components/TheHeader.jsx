import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function TheHeader() {
  return (
    <div className="header-container">
    <header className="the-header">
        <div className="logo">
        <Link to="/">WD BLOG</Link>
        </div>
        <div className="spacer"></div>
        <div className="navigation-items">
        <ul className="nav-list">
            <li className="nav-item"><NavLink to="/posts">Blog</NavLink></li>
            <li className="nav-item"><NavLink to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink to="/admin">Admin</NavLink></li>
        </ul>
        </div>
    </header>
    </div>
  )
}

export default TheHeader