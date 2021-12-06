import React , {useState , useEffect} from 'react';
import '../styles/Style.css';

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
       <div className="meme">
           <button className="bouton_meme" onClick={()=>setMemeIndex(memeIndex +1)}>NEW ONE</button>
           <img className="img_meme" src={memes[memeIndex].url}/>
       </div>: 
       <></>
    );
}

export default Meme;