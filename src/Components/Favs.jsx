import Card from "./Card";
import "./favs.css";
import { useGlobalStates } from "./utils/global.context";

const Favs = () => {
  const { states } = useGlobalStates();
  const showFavs = states.favs.map(({ id, name, username }) => {
    return (
      <Card
        key={id}
        reducer={{ actionType: "remove fav", payload: id }}
        name={name}
        username={username}
        id={id}
      />
    );
  });
  return (
    <main className="favs-container">
      <h1>Mis favoritos</h1>
      <div className="card-grid">{showFavs}</div>
    </main>
  );
};

export default Favs;
