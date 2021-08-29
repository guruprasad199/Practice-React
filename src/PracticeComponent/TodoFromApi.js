
import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((responce) => setList(responce.data))
      .catch((err) => console.log("error here"));
  }, []);



  return (
    <div className="App">

      <h1>To do list</h1>
        <div>
      {list.map((item, id) => (
        <div key={id}>      
          {item.name}
        </div>
      ))}
      </div> 
    </div>
  );
}



