import React, { useEffect } from "react";

const Tasklist = (props) => {

    const {list, setList} = props;

    useEffect(()=>{
      onClickRemoveItem();
    }, [])

    const onChangeStatus = e => {
        const name = Number(e.target.name);
        const check = e.target.checked;
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? check : item.done
        }));
        setList(updateList);
    };

    
    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };

    return (
        <div className="tasks">
            
        {list.length ? list.map(item => (
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
           <label className="todo new-item" for="miCheckbox">
               {item.description}
           </label>
           <img src="./../src/images/update.png" alt="actualizar tareas" />
           <img src="./../src/images/delete.png" alt="Eliminar tareas" onClick={onClickRemoveItem} />
            </div>
            )) : "No tasks"}
        </div>
    );
};

export default Tasklist;