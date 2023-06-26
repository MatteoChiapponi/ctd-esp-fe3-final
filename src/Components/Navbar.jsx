//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { Link } from "react-router-dom";
import routes from "./utils/Routes";

const Navbar = () => {
  return (
    <nav>
      <Link to={routes.home}>home</Link>
      <Link to={routes.contact}>contact</Link>
      <Link to={routes.favs}>favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  );
};

export default Navbar;
