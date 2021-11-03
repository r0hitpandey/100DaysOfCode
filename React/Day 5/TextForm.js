import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () =>{
      //console.log('uppercase was clicked');
      let newText = text.toUpperCase();
      setText(newText)
  }
  const handleOnChange =(event)=>{
      //console.log('on change');
      setText(event.target.value);
  }

  const [text, setText] = useState("Enter text here");
  //text = "new text"; //wrong way to update or change the state
  //setText("new text"); //New text to update or change the state
  return (
    <>
      <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value = {text} onChange={handleOnChange} id="myText" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Convert To UpperCase</button>
      </div>
    </>
  );
}
