import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function WithoutTable() {

    const handelToggle = (id, e) => {
    console.log(e.target.checked);
    const data = indata.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setIndata(data);
  };

    const [indata, setIndata] = useState([])

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) =>setIndata(res.data)).catch((error)=> (console.log("error here")))
        
       
    }, [])


    return (
        <div>
            <table>
                <thead>
                    <tr>
                       <td>No.</td> 
                       <td>Task</td>
                       <td>Status</td>
                    </tr>
                </thead>

                <tbody>
                    {indata.map((item, id) => (
                       <tr key={item.id}>
                         <td>{id + 1}</td>
                        <td>{item.title}</td>
                        <td>
                        <lable>
                            <input type="checkbox"
                                checked={item.completed}
                                onChange={(e) => {
                                  handelToggle(item.id, e)
                                }}
                            />
                            {item.completed ? "complete" : "incomplete"}
                        </lable>

                        </td>
                       </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
