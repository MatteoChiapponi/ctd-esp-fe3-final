import Card from "./Card";
import "./home.css";
import { useGlobalStates } from "./utils/global.context";

const Home = () => {
  const { states } = useGlobalStates();
  const showUsers = states.dentists.map((dentist) => {
    return (
      <Card
        key={dentist.id}
        reducer={{ actionType: "add fav", payload: dentist }}
        name={dentist.name}
        username={dentist.username}
        id={dentist.id}
      />
    );
  });
  return (
    <main className="main-container">
      <section id="dentistas">
        <h2>Nuestro equipo</h2>
        <div className="card-grid">{showUsers}</div>
      </section>
    </main>
  );
};

export default Home;
