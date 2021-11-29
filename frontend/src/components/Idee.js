import React from 'react';
import { useEffect , useState} from 'react';
import axios from 'axios';


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
        <div>
            <h1>Kanye west a dit :</h1>
            <button onClick={fetchData}>Autre meme</button>
            {state.joke}
        </div>
    );
};

export default Idee;