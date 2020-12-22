import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from 'axios';

let length = 0;
export default function File(props) {
  let [count,setCount] = React.useState(props.count);

    let handleInput = (event) => {
      if(count === props.count){
        return;
      }
    
      setCount(count-1);
  
      
      let obj = {imagePath:event.target.value,imgID:count};
      axios.post(`http://localhost:8080/`,obj)
        .then(res => {  
          console.log(res);
      });
    };
  



  return (
      <div>
    <label>You can choose {count} images</label><br/>
    <input type="file" accept="image/*" onInput={(event) => handleInput(event)}/>
    </div>
  );
}