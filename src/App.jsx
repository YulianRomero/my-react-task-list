import { Header } from "./components/Header";
import "./App.css";
import Task from "./components/Task";
import Tasklist from "./components/Tasklist";
import useLocalStorage from "./hooks/useLocalStorage";


function App() {
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

export default App;
