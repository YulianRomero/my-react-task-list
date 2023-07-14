import React, { useState } from "react";

const Task = ({agregarTareas}) => {
 
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTareas(description);
    setDescription("");
  };

  return (
    <div className="tasks1">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="newtask">
            <input
              type="text"
              className="text"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />
            <button disabled={description ? "" : "disabled"}>Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Task;
