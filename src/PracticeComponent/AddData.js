import React, {useState} from 'react'

export default function AddData() {

const [value, setValue] = useState(" ")

const handleSubmit = (event) => {
    setValue(event.target.value)
}
    return (
        
        <div>     
            <input type="text" placeholder="Enter something" onChange={value}  /> <button onClick={handleSubmit}>Add</button>
        </div>

    )
}




