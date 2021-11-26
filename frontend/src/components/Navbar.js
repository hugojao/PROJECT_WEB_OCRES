import React from 'react'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link exact to="/">Acceuil</Link>
            <Link exact to="/idees">Idees</Link>
            <Link exact to="/admin">Admin</Link>
        </div>
    );
};

export default Navbar;
