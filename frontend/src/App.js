import React from "react";
import './App.css';
import File from "./chooseFile";
function App() {

  let [show,setShow] = React.useState(false);
  let [value,setValue] = React.useState("");

  function handleClick(event){
    let images = parseInt(value);
    console.log(images);
    if(images <= 0 || isNaN(images)){
      return;
    }
    setShow(true);
  }

  function handleInput(event){
    setValue(event.target.value);
  }


  return (
    <div className="App">
      <input type="number" placeholder="Enter the number of images needed" onInput={(event) => handleInput(event)} value={value}/>
      <button onClick={(event) => handleClick(event)}>SUBMIT</button>
      {show && <File count={value}/>}
      </div>
  );
}

export default App;
