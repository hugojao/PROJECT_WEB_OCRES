import React from 'react'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="Accueil" exact to="/">Acceuil</Link>
            <Link className="Idees" exact to="/idees">Idées</Link>
            <Link className="Admin" exact to="/admin">Admin</Link>
        </div>
    );
};

export default Navbar;
