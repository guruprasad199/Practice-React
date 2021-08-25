import React, { useState } from 'react'

export default function Counter() {

const [value, setValue] = useState(0)

    var increment = () => {

        setValue(value+ 1)

    }

    var decrement = () => {
        setValue(value- 1)
    }
    return (
        <div>
            <button style={{ marginLeft: '.5rem'}} onClick={increment}>+</button><span>{value}</span><button onClick={decrement}>-</button>
        </div>
    )
}
