import React, { useState } from "react";
const Todolist = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const handleclick = (e) => {
    e.preventDefault();
    setList([...list, { task, flag: false }]);
    setTask("");
  };
  const handlecheck = (index) => {
    setList([
      ...list.slice(0, index),
      { ...list[index], flag: !list[index].flag },
      ...list.slice(index + 1),
    ]);
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
        <button onClick={handleclick}>submit todo</button>
      </form>
      <div>
        {list.map((item, index) => (
          <h4>
            {item.task}
            <input
              type="checkbox"
              checked={item.flag}
              onChange={() => handlecheck(index)}
            />
            <h4>{item.flag ? <h3>checked</h3> : <h3>unchecked</h3>}</h4>
          </h4>
        ))}
      </div>
    </div>
  );
};
export default Todolist;

// This is self todo app here
