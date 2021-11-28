import React from 'react';
import Flag from '../components/Flag';
import Navbar from '../components/Navbar';

const Admin = () => {
    return (
        <div>
            <Navbar/>
            <Flag/>
            <h1 className="titre_admin">PAGE ADMIN</h1>
        </div>
    );
};
export default Admin;