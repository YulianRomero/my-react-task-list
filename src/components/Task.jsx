import React, { useEffect, useState } from "react";
import Tasklist from "./Tasklist";

const Task = () => {
  const local = JSON.parse(localStorage.getItem("tareas"));
  const [list, setList] = useState(local || []);
  const [description, setDescription] = useState("");
  useEffect(() => {
     if(local !== null){
        setList(local);
        }
        else{localStorage.setItem("tareas", JSON.stringify(list));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        id: Math.floor(Math.random() * 10 ** 3),
        description,
        done: false,
        editable: false,
      },
    ]);
    localStorage.setItem("tareas", JSON.stringify(list));
    console.log("task", list);
    setDescription("");
  };

  return (
    <div className="tasks">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="newtask">
            <input
              type="text"
              className="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button disabled={description ? "" : "disabled"}>Add</button>
          </div>
        </div>
      </form>
      <Tasklist list={list} setList={setList} />
    </div>
  );
};

export default Task;