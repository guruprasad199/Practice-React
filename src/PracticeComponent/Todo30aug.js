import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function Todo30aug() {
    const [lists, setLists] = useState([])

    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => setLists(res.data)).catch((error) => console.log("error here"))

    }, [])

    return (
        <div>
            
            {lists.map((ind, id) => (
                <li key={id}>

                    {ind.title}
                    <input type="checkbox" defaultChecked={ind.completed}/>
                </li>

            ))}
        </div>
    )
}

// fetch the data from the api
// https://jsonplaceholder.typicode.com/todos
//  display  two given values from the json link. 
// After that create a button to display data on the basis of all comeplete and incomplete.
// And after that enable toggling for checkbox complete or incomplete