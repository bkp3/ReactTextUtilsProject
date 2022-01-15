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

    const handleCopyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let txt = text.split(/[ ]+/);
        setText(txt.join(" "));
    }

    const handleOnChange = (event) => {
        //console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    //setText("new text");

    return (
        <div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <div className="container">
                    <button onClick={handleUpperClick} className="btn btn-primary mx-1">Upper Case</button>
                    <button onClick={handleLowerClick} className="btn btn-primary mx-1">Lower Case</button>
                    <button onClick={handleClearClick} className="btn btn-primary mx-1">Clear Text</button>
                    <button onClick={handleCopyText} className="btn btn-primary mx-1">Copy Text</button>
                    <button onClick={handleExtraSpaces} className="btn btn-primary mx-1">Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p>
            </div>

        </div>
    )
}
