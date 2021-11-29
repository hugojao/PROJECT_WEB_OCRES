import React from 'react';
import Meme from '../components/Meme';
import Navbar from '../components/Navbar';
import Citation from '../components/Citations';
import Citationsb from '../components/Citationsb';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Meme/>
            <Citation/>
            <Citationsb/>
        </div>
    );
};

export default Home;