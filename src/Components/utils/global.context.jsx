import { createContext, useState, useContext} from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const fav = JSON.parse(localStorage.getItem("favs"))
  const [favs, setFavs] = useState(fav || []);
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{ favs, setFavs }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export const useGlobalStates = () => {
  return useContext(ContextGlobal);
};
