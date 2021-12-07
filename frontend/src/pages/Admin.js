import React from 'react';
import API from '../components/API';
import Navbar from '../components/Navbar';


const Admin = () => {
    return (
        <div>
            <Navbar/>
            <API/>
            <h1 className="titre_admin">PAGE ADMIN</h1>
        </div>
    );
};
export default Admin;