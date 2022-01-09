import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        //console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        //console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text here");
    //setText("new text");

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <div className="container">
                <button onClick={handleUpClick} className="btn btn-primary">Convert to Upper Case</button>
            </div>
        </div>
    )
}
