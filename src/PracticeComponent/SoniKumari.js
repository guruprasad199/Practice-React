import React, {useState, useEffect} from 'react'
import axios from 'axios'


const style = {
    container : {

        float: "left",
        width:"25%",
        margin: "20px",
        padding:" 20px",
        border: "solid 2px"

    },
}


export default function SoniKumari() {

    const [kumari, setKumari] = useState([])


    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setKumari(res.data)).catch((err) => console.log("error is here"))
       
    }, [])

    return (
        <div>
        <h1>Soni's data by fetching api</h1>
        <div>
            {kumari.map((item, id) => (
                <div style={style.container}>
                    <div>
                        <label>Name  :</label><span>  {item.name}</span>             
                    </div>
                    <div>
                        <label>Email  :</label><span>{item.email}</span>
                    </div>
                  
                </div>
            ))}
        </div>
            
        </div>
    )
}


