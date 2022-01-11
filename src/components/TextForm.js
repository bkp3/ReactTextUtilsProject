import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpperClick = () => {
        //console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        //console.log("Upper case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        //console.log("Upper case was clicked");
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        //console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    //setText("new text");

    return (
        <div>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <div className="container">
                    <button onClick={handleUpperClick} className="btn btn-primary mx-1">Upper Case</button>
                    <button onClick={handleLowerClick} className="btn btn-primary mx-1">Lower Case</button>
                    <button onClick={handleClearClick} className="btn btn-primary mx-1">Clear Text</button>
                </div>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </div>
    )
}
