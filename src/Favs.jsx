import Card from "./Components/Card";
import { useGlobalStates } from "./Components/utils/global.context";

const Favs = () => {
  const { favs } = useGlobalStates();
  const showFavs = favs.map((dentist) => (
    <Card
      key={dentist.id}
      origin="remove fav"
      name={dentist.nombre}
      username={dentist.usuario}
      id={dentist.id}
    />
  ));
  return <div className="dentist-container">{showFavs}</div>;
};

export default Favs;
