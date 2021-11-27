import React from 'react'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="Accueil" exact to="/">Acceuil</Link>
            <Link className="Idees" exact to="/idees">Idées</Link>
            <Link className="Admin" exact to="/admin">Admin</Link>
            <section className="titres_site">
            <h1 className="titre">Pépite</h1>
            <h2 className="sous-titre">Bienvenue sur Pépite ! Le site qui n'a aucun sens...</h2>
            </section>
        </div>
    );
};

export default Navbar;
