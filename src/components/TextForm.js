import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter the text here-called using hooks'); //React Hooks

    const handleOnClick = ()=>{
        console.log("Upper case button was clicked"); // this thing gets displayed in the console

        const newText = text.toUpperCase(); 

        setText(newText); // once the button is clicked. this text will be set as the value of the textrarea
    }

    /*
    const handleOnChange = ()=>{
        console.log("onChange");
    }
    */

    const handleOnChange = (event)=>{
        console.log("onChange");
        setText(event.target.value)
    }
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            {/* variabletext being used here */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea> 
            </div>
            <button className="btn btn-primary" onClick={handleOnClick}>Convert to upperCase</button>
        </div>
    )
}
