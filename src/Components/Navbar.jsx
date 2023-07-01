//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";
import routes from "./utils/Routes";
import "./navbar.css";

const Navbar = () => {
  const { states, dispatch } = useGlobalStates();
  const chageTheme = () => {
    dispatch({ type: "theme", payload: !states.theme });
  };
  return (
    <header>
      <nav>
        <Link to={routes.home}>home</Link>
        <Link to={routes.contact}>contact</Link>
        <Link to={routes.favs}>favs</Link>
        <button id="toggle" onClick={chageTheme}>change theme</button>
      </nav>
    </header>
  );
};

export default Navbar;
