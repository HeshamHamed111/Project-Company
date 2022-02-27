import React from 'react';
import {Link} from 'react-router-dom';
import styling from  './Landing.module.css';

const Navbar = () => {
    return ( 
      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styling.navspecial}`}>
      <div className="container-fluid">
      
        <Link className={`navbar-brand ${styling.brand}`} to="#"><span className={styling.ebrand}>e</span>StarUp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${styling.end}`} id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className={`nav-item ${styling.listlinks}`}>
              <Link className="nav-link active" aria-current="page" to="#">Home</Link>
            </li>
            <li className={`nav-item ${styling.listlinks}`}>
              <Link className="nav-link" to="#">About</Link>
            </li>            
            <li className={`nav-item ${styling.listlinks}`}>
              <Link className="nav-link" to="#">Screenshots</Link>
            </li>                        
            <li className={`nav-item ${styling.listlinks}`}>
              <Link className="nav-link" to="#">Features</Link>
            </li>
            <li className={`nav-item ${styling.listlinks}`}>
              <Link className="nav-link" to="#">Pricing</Link>
            </li>
            <li className={`nav-item ${styling.listlinks}`}>
              <Link className="nav-link" to="#">Contact</Link>
            </li>            
            <li className={`nav-item ${styling.listlinks}`}>
              <Link className="nav-link" to="#">Terms</Link>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
     );
}
 
export default Navbar;