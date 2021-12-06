import React from 'react';
import { useEffect , useState} from 'react';
import axios from 'axios';
import '../styles/Style.css';


const Idee = () => {

        const [state , setState ] = useState ({
            joke :''
        });

        useEffect( ()  => {
            fetchData();
        }, []);

        const fetchData = async () => {
        const result= await axios.get("http://www.boredapi.com/api/activity/");
        console.log(result.data.activity);
        setState({
            ...state,
            joke : result.data.activity
        })

    }


    return (
        <div className="idee">
            <h1 className="titre_idee">Do you want an idea ?</h1>
            <button className="bouton_idee" onClick={fetchData}>NEW ONE</button>
            <section className="activité"> {state.joke} </section>
    );
};

export default Idee;