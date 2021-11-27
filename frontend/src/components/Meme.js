import React , {useState , useEffect} from 'react';

const Meme = () => {
    const[memes , setMemes] =useState([]);
    const [memeIndex , setMemeIndex] = useState(0);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(res => {
            res.json().then(res => { 
                const memes = res.data.memes;
                setMemes(memes);
            });
        });
    }, []);
    
    return (
       memes.length ? 
       <div>
           <button onClick={()=>setMemeIndex(memeIndex +1)}>Autre meme</button>
           <img src={memes[memeIndex].url}/>
       </div>: 
       <></>
    );
}

export default Meme;