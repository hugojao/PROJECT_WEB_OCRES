import React, {useState} from 'react';
//import { makeStyles} from '@material-ui/core';
import QRCode from 'qrcode';



function Qr() { 
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="qrcode">
    <input className="entrée" label="Enter Text Here" onChange={(e) => setText(e.target.value)}/>
    <button  
    onClick={() => generateQrCode()}>Generate</button>
    <br/>
    <br/>
    <br/>
    {imageUrl ? (
      <a href={imageUrl} download>
      <img src={imageUrl} alt="img"/>
      </a>) : null}
      
      </div>
      
      );}
      
      
      export default Qr;