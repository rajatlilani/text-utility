import React, { useState } from "react"


export default function TextForm(rajat) {
    const [text, setText] = useState("Enter here");
    const Clicked = () => {
        console.log("clicked");
        //let upperText = text.toUpperCase();
        setText(text.toUpperCase())
    }
    const Clicked1 = () => {
        console.log("clicked");
        //let upperText = text.toUpperCase();
        setText(text.toLowerCase())
    }


    const afterClick = (event) => {
        console.log("after clicking")
        setText(event.target.value)
    }
    return (

        <div>
            <div className="container">
                <div className="mb-3">
                    <h1>{rajat.head}</h1>
                    <label htmlFor="myBox" className="form-label">Enter your text</label>
                    <textarea className="form-control" id="myBox" rows="9" value={text} onChange={afterClick}></textarea>

                </div>
                <button className="btn-upp" onClick={Clicked}>convert to uppercase 1</button>
                <button className="btn-upp mx-2" onClick={Clicked1}>convert to uppercase 1</button>
            </div>
            <div className="container">
                <p>Character count= {text.length}</p>
                <p>Number of words= {text.split(" ").length}</p>
                <p>Last character is {text.slice(-1)}</p>
            </div>

        </div>

    )
}