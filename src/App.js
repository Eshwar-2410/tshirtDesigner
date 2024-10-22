import React,{ useState } from 'react';
import UploadDesign from './components/UploadDesign';
import TShirtPreview from './components/TShirtPreview';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import './App.css'
function App(){
  const[design, setDesign]=useState(null);
  const[width, setWidth]=useState(150);
  const[height, setHeight]=useState(150);

  const handleUpload=(e)=>{
    const file=e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onloadend=()=>{
        setDesign(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleDownload=()=>{
    const tshirtElement=document.querySelector('.tshirt-preview');
    toPng(tshirtElement)
    .then((dataUrl)=>{
      saveAs(dataUrl,'t_shirt.png');
    })
    .catch((err)=>{
      console.log('Failed to download image:', err);
    });
  };



   return(
    <div className="App">
      <h1>
        T-Shirt Design App
      </h1>
      <UploadDesign onUpload={handleUpload}/>
      <div className="resize-options">
        <label>
          Width:
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            min="50"
            max="300"
          />
        </label>
        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            min="50"
            max="300"
          />
        </label>
      </div>
      
      <TShirtPreview design={design}/>
      <button onClick={handleDownload}>Download Design</button>
    </div>
   )
};

export default App;