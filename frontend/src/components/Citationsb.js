import React from 'react';
import { useEffect , useState} from 'react';
import axios from 'axios';


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
        <div>
            <h1>Chuck Norris a dit :</h1>
            <button onClick={fetchData}>Autre meme</button>
            {state.joke}
        </div>
    );
};

export default Citationsb;