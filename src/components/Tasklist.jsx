import React, { useEffect, useState } from "react";

const Tasklist = ({ list, setList }) => {
  localStorage.setItem("tareas", JSON.stringify(list));
 
  const [selectedItemId, setSelectedItemId] = useState(null);


  const onChangeStatus = (e) => {
    const name = Number(e.target.name);
    const check = e.target.checked;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? check : item.done,
    }));
    setList(updateList);
  };

  const onHandleDelete = (e) => {
    const tasklist = list.filter((item) => item.id !== e);
    setList(tasklist);
  };

  const taskUpdateSelect = (e, datos) => {
    const task = list.map((item) => ({
      ...item,
      editable: item.id === e ? true : item.editable,
    }));
    setList(task);
    setSelectedItemId(datos);
  };

  const handleUpdate = (e, datos) => {
    const task2 = list.map((item) => ({
      ...item,
      description: item.id === e ? datos : item.description,
      editable: false,
    }));
    setList(task2);
  };

  const handleInputChange = (event) => {
    setSelectedItemId(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="tasks">
      {list.length
        ? list.map((item) => (
            <div className="task" key={item.id}>
              <input
                className="todo__state"
                name={item.id}
                type="checkbox"
                defaultChecked={item.done}
                onChange={onChangeStatus}
                id="miCheckbox"
                key={item.id}
              />
              {item.editable ? (
                <>
                  <input
                    type="text"
                    id={item.id}
                    value={selectedItemId}
                    onChange={handleInputChange}
                  />
                  <img
                    src="./../src/images/ok.png"
                    alt="actualizar tareas"
                    onClick={() => handleUpdate(item.id, selectedItemId)}
                  />
                </>
              ) : (
                <>
                  <label className="todo new-item" htmlFor="miCheckbox">
                    {item.description}
                  </label>
                  <img
                    src="./../src/images/update.png"
                    alt="actualizar tareas"
                    onClick={() => taskUpdateSelect(item.id, item.description)}
                  />
                </>
              )}
              <img
                src="./../src/images/delete.png"
                alt="Eliminar tareas"
                onClick={() => onHandleDelete(item.id)}
              />
            </div>
          ))
        : "No tasks"}
    </div>
  );
};

export default Tasklist;
