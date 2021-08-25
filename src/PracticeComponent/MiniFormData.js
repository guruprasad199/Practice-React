import React, { useState } from 'react'

const style = {
    inputs: {
        margin : "10px",
        padding:"10px",


    }
}

export default function MiniFormData() {

    const [inputFields, setInputFields] = useState([
        { firstname: '', lastname: ''},
        { firstname: '', lastname: ''},


    ])
    const handleInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inputFields", inputFields)

    }
    const increment = () => {
        setInputFields([...inputFields, { firstname: '', lastname: ''} ])
    }

    const decrement = (index) => {
       const values = [...inputFields]
       values.splice(1, index)
       setInputFields(values)
    }

    return (
        <div classiteme="container">
            <h1>Mini form Data</h1>
          <div style={style.inputs}>
            <form  onSubmit={handleSubmit}>
                { inputFields.map((item, index) => (
                    <div key={index}>
                        <input name="firstname" type="text" firstname="firstname"  placeholder="First name"
                         value={item.firstname} style={style.inputs}
                           onChange={event => handleInput(index, event)}
                               
                           /> 

                        <input  name="lastname" onChange={event => handleInput(index, event)} 
                         type="text" lastname="lastname"  placeholder="Last name" 
                          value={item.lastname} style={style.inputs}
                          />
                        <button onClick={() =>increment()} style={style.inputs}>+</button>
                        <button  onClick={() =>decrement(index)} style={style.inputs}>-</button>
                    </div>
                ))}
            </form>
            </div>
            <button onClick={handleSubmit} style={style.inputs}>Send</button>
            
        </div>
    )
}


