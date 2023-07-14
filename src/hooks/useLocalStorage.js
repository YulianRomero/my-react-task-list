import { useEffect, useState } from "react";

function useLocalStorage(){

    const dataLocal = JSON.parse(localStorage.getItem('tareas'));
 
    const [list, setList] = useState( dataLocal || []);            

    useEffect(()=>{
      if(list===null){
        window.localStorage.setItem("tareas",JSON.stringify(list));
      }
    }, [list]);


  const agregarTareas=(description)=>{
    const newtask = {
        id: Math.floor(Math.random() * 10 ** 3),
        description: description,
        done: false,
        editable: false,
      };
      let newTaskList = [...list, newtask]; //Se agrega el objeto
      window.localStorage.setItem("tareas",JSON.stringify(newTaskList));
      //Se actualiza el estado que contiene la tareas de tareas.
      setList(newTaskList);
     }

     const eliminarTareas = (id) => {
        let listaTareas = [...list];
        const filtroListaTareas = listaTareas.filter((item) => item.id !== id);
        window.localStorage.setItem("tareas",JSON.stringify(filtroListaTareas));
        setList(filtroListaTareas);
      };

      const seleccionarTarea = (id) => {
        const updateList = list.map(item => ({
            ...item,
            editable: item.id === id ? true : item.editable
        }));
        setList(updateList);
      };

      const actualizarTareas = (id, valorActualizar) => {
        const updateList = list.map(item => ({
            ...item,
            description: item.id === id ? valorActualizar : item.description,
            editable: false
        }));
        window.localStorage.setItem("tareas",JSON.stringify(updateList));
        setList(updateList);
      };

        const onCambiarEstado = (id, check) => {           
          const updateList = list.map((item) => ({
            ...item,
            done: item.id === id ? check : item.done,
          }));
          window.localStorage.setItem("tareas",JSON.stringify(updateList));
          setList(updateList);
        };


  return {list, agregarTareas, eliminarTareas, seleccionarTarea, actualizarTareas, onCambiarEstado};
}

export default useLocalStorage;