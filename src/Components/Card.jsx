import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";
import "./card.css";

const Card = ({ name, username, id, reducer }) => {
  const { states, dispatch } = useGlobalStates();
  const isFav = states.favs.some((den) => den.id === id);

  const dispatcherInfo = {
    type: reducer.actionType,
    payload: reducer.payload,
  };

  return (
    <article className="card-container">
      <Link to={"/dentist/" + id}>
        <h2>{name}</h2>
        <p>username: {username}</p>
        <p>id: {id}</p>
        <p>{isFav ? "ya es fav" : "no es fav"}</p>
      </Link>
      {isFav && reducer.actionType === "remove fav" ? (
        <button onClick={() => dispatch(dispatcherInfo)}>
          {reducer.actionType}
        </button>
      ) : (
        !isFav &&
        reducer.actionType === "add fav" && (
          <button onClick={() => dispatch(dispatcherInfo)}>
            {reducer.actionType}
          </button>
        )
      )}
    </article>
  );
};

export default Card;
