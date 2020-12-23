import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from 'axios';

let fileObj = 0;
export default function File(props) {
  let [input,setInput] = React.useState("");
    

    let handleInput = (event) => {
      const reader = new FileReader();
      reader.onload= ()=>{
        if(reader.readyState === 2){
          setInput(reader.result);
        }
      }
      fileObj = event.target.files[0];
      console.log(fileObj);
      reader.readAsDataURL(event.target.files[0]);
      props.updateArr(props.keyValue,fileObj.name);
    };
  



  return (
      <div className="image-ctr">
      <input type="file" accept="image/*" onChange={(event) => handleInput(event)}/>
      {/* {<button onClick={(event) => handleClick(event)}>SUBMIT</button>} */}
      {input && <img src={input}></img>}
    </div>
  );
}