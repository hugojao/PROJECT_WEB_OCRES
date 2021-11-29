import React from 'react';
import Meme from '../components/Meme';
import Navbar from '../components/Navbar';
import Citation from '../components/Citations';
import Citationsb from '../components/Citationsb';
import Idee from '../components/Idee';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Meme/>
            <Citation/>
            <Citationsb/>
            <Idee/>

        </div>
    );
};

export default Home;