import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function TryTodo() {
    const [list, setList] = useState([])

    const [added,setAdded] = useState([])

    const [num, setNum] = useState(10)

    const handleNext = () => {
        axios.get(`https://jsonplaceholder.typicode.com/todos?_start=${num}&_limit=10`).then((res) => setAdded([...added, ...res.data]))
        .catch((err) => console.log("error"))
        setNum(num + 10)
    }

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => setList(res.data))
        .catch((err) => console.log("error"))


       
    }, [])
    return (
        <div>
            
            <h1>Todo list</h1>
            <div>
                {list.slice(1,10).map((item, id) => (
                    <li key={id} >
                    {item.title}
                    <input type="checkbox" defaultChecked={item.completed}/>
                    </li>

                ))}
                <button className="btn btn-primary" onClick={handleNext}>Next</button>

                {added.map((ind, id) => (
                    <li key={id}>
                        {ind.title}
                    </li>

                ))}



            </div>

        </div>
    )
}
