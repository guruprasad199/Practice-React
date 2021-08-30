import "./styles.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [initData, setInitData] = useState([]);
  const [mysort, setMysort] = useState("all");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setInitData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handelToggle = (id, e) => {
    console.log(e.target.checked);
    const data = initData.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setInitData(data);
  };
  return (
    <div className="App">
      <div className="myselect">
        <select
          onClick={(e) => {
            setMysort(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="incomplete">Incompleted</option>
        </select>
      </div>
      <table >
        <thead>
          <tr>
            <td>Sr No</td>
            <td>Task</td>
             <td>Completed</td>
          </tr>
        </thead>
        <tbody>
          {initData
            .filter((item) => {
              if (mysort == "complete") {
                if (item.completed) {
                  return true;
                }
                return false;
              } else if (mysort == "incomplete") {
                if (!item.completed) {
                  return true;
                }
                return false;
              }
              return true;
            })
            .map((item, i) => {
              return (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={(e) => {
                          handelToggle(item.id, e);
                        }}
                      />
                      {item.completed ? "Complete" : "Incomplete"}
                    </label>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
