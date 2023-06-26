import React, { useState } from "react";
import Tasklist from "./Tasklist";

const Task = () => {
  
  const [list, setList] = useState([]);

    const handleAddItem = addItem => {
        setList([...list, addItem]);
    };

    const [description, setDescription] = useState(""); 
    const handleSubmit = e => {
        e.preventDefault(); 
        
        handleAddItem({
            id: Math.floor(Math.random()* (10**3)),
            description,
            done: false
        });
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
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button
                        // disabled={description ? "" : "disabled"}
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    <Tasklist list={list} setList={setList} />
        </div>
    );
};

export default Task;