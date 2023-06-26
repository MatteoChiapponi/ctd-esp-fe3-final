import { useEffect, useState } from "react";
import { getAllUser } from "../Services/dentisService";
import Card from "./Card";

const Home = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    // aqui podemos hacer memoizacion
    getAllUser().then((allUsers) => {
      setUsers(allUsers);
    });
  }, []);
  const showUsers = users.map((user) => (
    <Card
      key={user.id}
      name={user.name}
      username={user.username}
      id={user.id}
    />
  ));
  return <div className="dentist-container">{showUsers}</div>;
};

export default Home;
