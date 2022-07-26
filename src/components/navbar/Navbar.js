import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar dark">Navbar
  <div className="container-fluid">
  <ul className="navbar-nav">
    <li className="nav-item">
<Link className="nav-link"to="/">Home</Link>
</li>
<li className="nav-item">
<Link className="nav-link"to="/search">Search</Link>
</li>
<li className="nav-item">
<Link className="nav-link"to="/dropdown">Dropdown</Link>
</li>
<li className="nav-item">
<Link className="nav-link"to="/music">Music</Link>
</li>
<li className="nav-item">
<Link className="nav-link"to="/login">Login</Link>
</li>
<li className="nav-item">
<Link className="nav-link"to="/signup">Sinup</Link>
</li>
  </ul>
  </div>
  </nav>
    )
}

export default Navbar