import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar dark">Navbar
  <div className="container-fluid">
  
        <Link to="/">
    Music search
        </Link>
      
  <ul className="navbar_links">
    <li className="nav-item">
<Link className="nav-link"to="/">Home</Link>
</li>
<li className="nav-item">
<Link className="nav-link"to="/Search">Search</Link>
</li>
<li className="nav-item">
<Link className="nav-link"to="/Music">Music</Link>
</li>
<li className="nav-item">
<Link className="nav-link"to="/Login">Login</Link>
</li>
<li className="nav-item">
<Link className="nav-link"to="/Signup">Signup</Link>
</li>
  </ul>
  </div>
  
  </nav>
    )
}

export default Navbar