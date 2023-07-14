import React, { useState } from "react";

const Task = ({agregarTareas}) => {
 
  const [description, setDescription] = useState("");
  const [formvalidation, setFormvalidation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTareas(description);
    setDescription("");
  };

  const handleOnChange = (event) =>{
      const value = event.target.value;
      if (value.length < 4) {
        setFormvalidation("La tarea debe contener mas de 3 caracteres");
      } else {
        setFormvalidation("");
      }
      setDescription(value);
  }

  return (
    <div className="tasks1">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="newtask">
            <input
              type="text"
              className="text"
              value={description}
              onChange={handleOnChange}
            />
            <button disabled={description.length >=4  ? "" : "disabled"}>Add</button>
            
          </div>
          {formvalidation && <p className='error'>{formvalidation}</p>}
        </div>
      </form>
    </div>
  );
};

export default Task;
