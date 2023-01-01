import React,{useState} from 'react'


export default function TextArea(props) {
      const UpperClick=()=>{
        console.log('you clicked the uppercase button'+text);
        let newTxt =text.toUpperCase();
        setText(newTxt);
       props.showAlert("converted to upper case","success")
      }
      
      const lowerClick=()=>{
        console.log('you clicked the uppercase button'+text);
        let newTxt =text.toLowerCase();
        setText(newTxt);
        props.showAlert("converted to lower case","success")
      }

      const handleOnchange=(event)=>{
        console.log("clicked this method");
        setText(event.target.value);
      }

    const [text,setText] =useState("");
  return (
    <>
<div className="container mb-3" style={{color :props.mode==="dark"?"white":"black"}}>
    <h1>{props.heading}</h1>
  <textarea className="form-control" value = {text} onChange ={handleOnchange}id="box" rows="8"  style={{backgroundColor :props.mode==="light"?"white":"black",color :props.mode==="dark"?"white":"black"}}></textarea>
  <button className="btn btn-primary my-3" onClick={UpperClick}>UPPER CASE ME</button>
  <button className="btn btn-primary my-3 mx-3" onClick={lowerClick}>LOWER CASE ME</button>
</div>
   <div className=" container mb-3" style={{color :props.mode==="dark"?"white":"black"}}>
      <h2>Number of Words and the Letters</h2>
      <p>{text.split(" ").length}Words in text and {text.length} letters in the words</p>

      <h2 >Time to Read the Text in the Paragraph</h2>
      <p>{0.008 * text.split(" ").length} Per second to read the Words</p>
      
      <h2>Previwe</h2>
      <p>{text.length>0?text:"enter the text to preview"}</p>
   </div>
   </>
  )
}


// ${props.mode ==="dark"?"light":"dark"}  className ="text-light"
