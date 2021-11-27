import React from 'react';
import { useEffect , useState} from 'react';
import axios from 'axios';


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
        <div>
            <h1>Kanye west a dit :</h1>
            <button onClick={fetchData}>Autre meme</button>
            {state.joke}
        </div>
    );
};

export default Citations;