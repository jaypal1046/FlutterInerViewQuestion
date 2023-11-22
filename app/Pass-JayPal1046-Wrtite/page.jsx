"use client";
import React from "react";
import { Style } from "./Write.css";
import Plus from "./plus.png";
import Images from "./image.png";
import External from "./external.png";
import Videos from "./video.png";
import Image from "next/image";
import { useState } from "react";
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
const sendDataToApi = async (title, url, value) => {
  const data={
    "title":title,
    "url":url,
    "content":value

  }
  try {
    const response = await fetch('https://jaypal1046.pythonanywhere.com/addPostbyjson/'+title, {
    
      method: 'Post',
   
     
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(data)
   
    },
    
    );

    if (!response.ok) {
      throw new Error('Error while sending data to API');
    }

    const responseData = await response.json();
    console.log('API Response:', responseData);
  } catch (error) {
    console.error('Error:', error);
  }
};

function WritePost() {
  
  const [open, setOpen] = useState(false);
  

  
  const [file, setFile] = useState(null);
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  
  

  return (
    <main>
      <div className="WContainer">
        <input type="text" value={title} placeholder="Input title of post" className="Winput" onChange={(e)=>setTitle(e.target.value)} />

        <input type="text" value={url} placeholder="Plase input url of image" className="Winput" onChange={(e)=>setUrl(e.target.value)} />
        <div className="Wediter">
          <button className="WButton" onClick={() => setOpen(!open)}>
            <Image src={Plus} alt="Plus Icons" width={16} height={16} />
          </button>


          {open && (
            <div className="Wadd">
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />

            
                <button className="WaddButton">
                <label htmlFor="image">
                  <Image
                    src={Images}
                    alt="image Icons"
                    width={16}
                    height={16}
                  />
                  </label>
                </button>
              
              <button className="WaddButton">
                <Image
                  src={External}
                  alt="Exterval Icons"
                  width={16}
                  height={16}
                />
              </button>
              <button className="WaddButton">
                <Image src={Videos} alt="Video Icons" width={16} height={16} />
              </button>
            </div>
          )}
            <ReactQuill className="WTextArea" value={value} onChange={setValue} placeholder="tell me your story..."/>
          {/* <ReactQuill
            className="WTextArea"
            value={value}
            onBlur={setvalue}
            placeholder="tell me your story..."
          /> */}
        </div>
        <div className="WButtonPublish">
          <button onClick={()=>sendDataToApi(title,url,value)} className="WPublish">Publish</button>
        </div>
      </div>
    </main>
  );
}

export default WritePost;
