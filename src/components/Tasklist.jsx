import React, { useState } from "react";

const Tasklist = (props) => {

  const { list, eliminarTareas, seleccionarTarea, actualizarTareas, onCambiarEstado } = props;

  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleInputChange = (event) => {
    setSelectedItemId(event.target.value);
  };

  const handleClickSelect = (id, description) => {
    seleccionarTarea(id);
    setSelectedItemId(description);
  };

  return (
    <div className="tasks2">
      {list.length
        ? list.map((item) => (
            <div className="task" key={item.id}>
              <input
                className="todo__state"
                name={item.id}
                type="checkbox"
                defaultChecked={item.done}
                onChange={(event)=>onCambiarEstado(item.id, event.target.checked)}
                id="miCheckbox"
                key={item.id}
              />
              {item.editable ? (
                <>
                  <input
                    type="text"
                    id={item.id}
                    defaultValue={selectedItemId}
                    onChange={handleInputChange}
                  />
                  <img
                    src="./../src/images/ok.png"
                    alt="actualizar tareas"
                    onClick={() => actualizarTareas(item.id, selectedItemId)}
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
                    onClick={() => handleClickSelect(item.id, item.description)}
                  />
                </>
              )}
              <img
                src="./../src/images/delete.png"
                alt="Eliminar tareas"
                onClick={() => eliminarTareas(item.id)}
              />
            </div>
          ))
        : "No tasks"}
    </div>
  );
};

export default Tasklist;