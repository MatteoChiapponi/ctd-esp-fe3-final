import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";

const Card = ({ origin, name, username, id }) => {
  const { favs, setFavs } = useGlobalStates();
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const dentist = {
      nombre: name,
      usuario: username,
      id: id,
    };
    const newFavs = [...favs, dentist];
    localStorage.setItem("favs", JSON.stringify(newFavs));
    setFavs(newFavs);
  };
  const removeFav = () => {
    const newFavs = favs.filter((dentist) => dentist.id !== id);
    localStorage.setItem("favs", JSON.stringify(newFavs));
    setFavs(newFavs);
  };

  const buttonText = origin ? origin : "add fav";
  return (
    <div className="card">
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <h3>{name}</h3>
      <Link to={"dentist/" + id}>
        <p>username: {username}</p>
      </Link>
      <p>id: {id}</p>
      <button onClick={origin ? removeFav : addFav}>{buttonText}</button>
    </div>
  );
};

export default Card;
