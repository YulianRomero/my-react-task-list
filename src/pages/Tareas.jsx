
import { Header } from "../components/Header";
import Task from "../components/Task";
import Tasklist from "../components/Tasklist";
import useLocalStorage from "../hooks/useLocalStorage";
import "../App.css";

export function Tareas() {
  const { list, agregarTareas, seleccionarTarea, eliminarTareas, actualizarTareas, onCambiarEstado} = useLocalStorage();

  return (
    <div className="App">
      <div className="tasks">
          <Header />
          <Task agregarTareas={agregarTareas} />
          <Tasklist
              list={list} 
              actualizarTareas = {actualizarTareas}
              seleccionarTarea = {seleccionarTarea} 
              eliminarTareas = {eliminarTareas}
              onCambiarEstado = {onCambiarEstado}
            />
      </div>
    </div>
  );
}

