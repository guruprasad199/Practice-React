import React, { useState } from 'react'

export default function TextEdit() {

    const [text, setText] = useState("Enter your text here")

    const handleChange = (event) => {
        setText(event.target.value)

    }

    const handleClick = () => {
        var newt = text.toLowerCase()
        setText(newt)
    }


    return (
        <div style={{margin:"50px", padding:"50px"}}>
            
            <textarea rows="8" onChange={handleChange} value={text }>
            </textarea>

            <div>
            <button  onClick={handleClick} className="btn btn-warning mx-2" >
              Convert to UpperCase
            </button>
            </div>
        </div>
    )
}
