import React from 'react';
import { useEffect , useState} from 'react';
import axios from 'axios';
import '../styles/Meme.css';

const Citationsb = () => {

    

        const [state , setState ] = useState ({
            joke :''
        });

        useEffect( ()  => {
            fetchData();
        }, []);

        const fetchData = async () => {
        const result= await axios.get("https://api.chucknorris.io/jokes/random");
        console.log(result.data.value);
        setState({
            ...state,
            joke : result.data.value
        })
    }
    return (
        <div className="chuck">
            <h1 className="titre_chuck">Chuck Norris once said :</h1>
            <button className="bouton_chuck" onClick={fetchData}>ANOTHER CHUCK</button>
            <section className="joke"> {state.joke} </section>
        </div>
    );
};

export default Citationsb;