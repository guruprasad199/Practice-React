import { useState, useEffect } from "react";

import axios from "axios";

export default function TodoFinal() {
  const [list, setList] = useState([]);

  const [newlist, setNewList] = useState([]);

  const [number, setNumber] = useState(10);

  const handleclick = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/todos?_start=${number}&_limit=5`
      )

      .then((response) => setNewList([...newlist, ...response.data]))

      .catch((err) => console.log("Error"));

    setNumber(number + 1);

    console.log(newlist);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10")

      .then((response) => setList(response.data))

      .catch((err) => console.log("Error"));
  }, []);

  return (
    <div className="App">
      {list.map((item, ind) => (
        <li key={ind}>{item.title}</li>
      ))}

      <button onClick={handleclick}>Next</button>

      {newlist.map((item, ind) => (
        <li key={ind}>{item.title}</li>
      ))}
    </div>
  );
}
