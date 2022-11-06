import React, { useState } from 'react'
import QRCode from 'qrcode';
import { images } from './constants';
function App() {
    const [url,setUrl]= useState('');
    const [qrcode, setQrcode] = useState('')

    const GenerateQRCode= () => {
        QRCode.toDataURL(url, (err,url) => {
            if(err) return console.error(err)

            console.log(url)
            setQrcode(url)
        })
    }

  return (
    <div className='app'>
        <div className="heading">
            <img src={images.logo} alt="logo" className='logo' />
            <span>QR Code Generator</span>
        </div>
        
        <div className='text-input'>
           <input 
            type="text"
            placeholder='Type any text'
            value={url}
            onChange={(e)=> setUrl(e.target.value)}
            />
            <button onClick={GenerateQRCode}>Generate</button>
        </div>
        <div className='qr-out'>    
            {qrcode &&
                <>
                    <img src={qrcode} alt="qr" />  
                    <a href={qrcode} download="QRCode">
                    <button type="button">Download</button>
                    </a>
                </>


            }
        
        </div>
        
       
    </div>
  )
}

export default App