import React from 'react';
import Idee from '../components/Idee';
import Navbar from '../components/Navbar';



const Idees = () => {
    return (
        <div>
            <Navbar/>
            <Idee/>
            <h1 className="titre_idees">Donnez nous vos idées !</h1>
        </div>
    );
};

export default Idees;