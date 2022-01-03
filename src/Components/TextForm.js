import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState(" ");
    const handleUpClick = () => {
        // console.log('On Click was triggered' +text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        // console.log('On Click was triggered' +text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log('On change was triggered');
        setText(event.target.value);
    }
    const handleTitleClick = () => {
        let titCase = text[0].toUpperCase() + text.substr(1).toLowerCase();
        setText(titCase);
    }
    // let setStyle={
    //     if(props.mode==='dark'){

    //     }
    // }

    return (

        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='my-3 '  style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}  </h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : '#afafaf;', color: props.mode==='dark' ? 'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}  >Convert to uppercase</button>
                    <button className="btn btn-success my-2 mx-1 " onClick={handleLowClick}  >Convert to Lowercase</button>
                    <button className="btn btn-secondary my-2 mx-1 " onClick={handleTitleClick}  >Convert to Titlecase</button>

                </div>
                <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h2>Your Text Summary</h2>
                    <p> {text.split(" ").length} words and {text.length} characters</p>
                    <h2> Preview </h2>
                    <p> {text.length>0?text: "Enter Something in the above box to preview here"} </p>
                </div>
            </div>
        </>
    )
}

// word[0].toUpperCase() + word.slice(1).toLowerCase())
// text[0].toUpperCase() + text.slice(1).toLowerCase())
