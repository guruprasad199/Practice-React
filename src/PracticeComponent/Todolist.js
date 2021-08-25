import React, { useState } from "react";
const Todolist = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const handleclick = (e) => {
    e.preventDefault();
    setList([...list , { task }]);
    setTask("");
  };
  console.log(list);
  return (
    <div>
      <form>
        <lable>
          task:
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </lable>
        <button
         onClick={handleclick}>
         submit todo</button>
      </form>
      <div>
        {list.map((item, index) => (
          <h4>
            {item.task}
          </h4>
        ))}
      </div>
    </div>
  );
};
export default Todolist;




