import {Link} from "react-router-dom"
export function Menu() {
  return (
    <nav>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/task">Tareas</Link>
        </li>
        <li>
        <Link to="/aboutUs">Sobre Nosotros</Link>
        </li>
      </ul>
    </nav>
  );
}
