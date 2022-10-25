import React from "react";
import { useState} from "react";


export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const sendImage = (e) => {
    e.preventDefault();
    console.log('IMAGE: ',selectedImage)
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:4000/${selectedImage.name}`, {
      method: "GET",
      // body: selectedImage
    })
        .then(response => response.json())
        .then(response =>{
          console.log('res: ',response)
        });
        
}

  return (<>
    <div>
    <h1>Upload and Display Image usign React Hook's</h1>
    {     selectedImage && (
      <div>
      <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
      <br />
      <button onClick={()=>setSelectedImage(null)}>Remove</button>
      </div>
    )}
    <br />
   
    <br /> 
    <input
      type="file"
      name="myImage"
      onChange={(event) => {
        console.log(event.target.files[0]);
        setSelectedImage(event.target.files[0]);
      }}
    />
  </div>
  <button onClick={(e)=>sendImage(e)}>Upload to drive</button>
  </>
  );
};
