import {useEffect, useState} from 'react'
import axios from 'axios'
export default function UserDetails() {

    const [list, setList] = useState([])

    const [selected, setSelected] = useState(" ")


    const style = {
        container : {

            float: "left",
            width:"25%",
            margin: "20px",
            padding:" 20px",
            border: "solid 2px"

        },
        radio: {
            float:"left",
            padding:"10px"
        }
    }

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((responce) => setList(responce.data))
        .catch((err) => console.log("error here"))


    }, [])



    return (
        <div>
        
            {list.map((item, id) => (

                <div style={style.container} >

                    <div style={style.radio}>
                        <input type="radio" name="userRadio"   />
                    </div>
                    <div>
                        <label>Name : </label><span>{item.name}</span>
                    </div>
                    <div>
                        <label>UserName : </label><span>{item.username}</span>
                    </div>
                    <div><button >Edit</button></div>




                </div>

                
            ))}

        </div>
    )
}
