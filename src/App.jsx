import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./Components/utils/Routes";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Dentist from "./Components/Dentist";
import Favs from "./Favs";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.dentist} element={<Dentist />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route
            path={routes.routNotFound}
            element={<h1>pagina no encontrada</h1>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
