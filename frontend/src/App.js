import React from "react";
import './App.css';
import File from "./chooseFile";
import axios from 'axios';


let arr = [];
let length= 0;
let count=0;
function App() {

  let [show,setShow] = React.useState(false);
  

  let submit = (event) => {
    
    const obj = {path:arr};
    axios.post(`http://localhost:8080/`,obj)
      .then(res => {  
        console.log(res+"result");
    });
    
  };

  function handleClick(event){
    if(length <= 0){
      return;
    }
    
    
    if(arr.length === 0){
      arr = new Array(length).fill();
    }
    else if(arr.length > length){
      arr.length = length;
      console.log(arr);
    }
    else{
      arr[length-1] = 0;
      arr.fill();
      console.log(arr);
    }
    if(show === 1 || show === false){
      setShow(show+1);
    }
    if(show === 2){
      setShow(show-1);
    }
    
    
  }


  let updateArr = (key,name) => {
    count++;
    if(count === length){
      if(show === 1 || show === false){
        setShow(show+1);
      }
      if(show === 2){
        setShow(show-1);
      }
    }
    
    arr[key] = name;

  }
  function handleChange(event){
    
    length = parseInt(event.target.value)
  }


  return (
    <div className="App">
      <div>
      <input type="number" placeholder="Enter the number of images needed" onChange={(event) => handleChange(event)}/>
      <button onClick={(event) => handleClick(event)}>SUBMIT</button>
      </div>
      {show && <div className="ctr">{arr.map((val,index) => <File keyValue={index} updateArr = {(key,name) => updateArr(key,name)}/>)}</div>}
      {(count===length && count !== 0) && <button>SUBMIT</button>}

      </div>
  );
}

export default App;
