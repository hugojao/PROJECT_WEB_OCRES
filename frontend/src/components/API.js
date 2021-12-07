import React from 'react';
import { useEffect , useState} from 'react';
import axios from 'axios';
import '../styles/Style.css';
import Api from '../styles/Api.css'


const API = () => {
        const [state , setState ] = useState ({
            joke :''
        });

        useEffect( ()  => {
            fetchData();
        }, []);

        const fetchData = async () => {
        const result= await axios.get("http://localhost:8000/api");
        console.log(result.data);
        setState({
            ...state,
            joke : result.data
        })

    }


    return (
        <div className="API">
            <h1 className="API_titre">Form</h1>
        </div>
    );
};

export default API;