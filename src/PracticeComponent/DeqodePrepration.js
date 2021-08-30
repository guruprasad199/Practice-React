import React, { useState } from "react";

const DeqodePrepration = () => {
  const [task, SetTask] = useState("");
  const [list, setList] = useState([]);

  const handleclick = (e) => {
    e.preventDefault();

    setList([...list, { task, flag: false }]);
    // SetTask("")
  };

  const hamdlecheck = (id) => {
         setList([
             {...list[id], flag : !list[id].flag},
         ])
  }
  
  console.log(list)

  return (
    <div>
      <form>
        <lable>
          Task
          <input
            type="text"
            value={task}
            onChange={(e) => SetTask(e.target.value)}
          />
        </lable>
        <button onClick={handleclick}>Submit todo</button>
      </form>

      <div>
        {list.map((item, id) => (
          <h4>
            {item.task}
            <input
              type="checkbox"
              checked={item.flag}
              onChange={() => hamdlecheck(id)}
            />
            <h4>{item.flag ? <h3>checked</h3> : <h3>unchecked</h3>}</h4>
          </h4>
        ))}
      </div>
    </div>
  );
};
export default DeqodePrepration;
