import React from 'react';
import { useEffect , useState} from 'react';
import axios from 'axios';
import '../styles/Meme.css';

const Citations = () => {
        const [state , setState ] = useState ({
            joke :''
        });

        useEffect( ()  => {
            fetchData();
        }, []);

        const fetchData = async () => {
        const result= await axios.get("https://api.kanye.rest");
        console.log(result.data.quote);
        setState({
            ...state,
            joke : result.data.quote
        })

    }


    return (
        <div className="kanye">
            <h1 className="kanye_titre">Kanye once said :</h1>
            <button className="bouton_kanye" onClick={fetchData}>ANOTHER KANYE</button>
            <section className="quote"> {state.joke} </section>
        </div>
    );
};

export default Citations;