import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { getAllUser } from "../../Services/dentisService";
import { reducer } from "./utils";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  const fav = JSON.parse(localStorage.getItem("favs"));
  const theme = JSON.parse(localStorage.getItem("theme"));
  
  const initialState = { theme: theme, dentists: [], favs: fav || [] };
  const [states, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getAllUser().then((allDentist) => {
      dispatch({ type: "getDentists", payload: allDentist });
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{ states, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export const useGlobalStates = () => {
  return useContext(ContextGlobal);
};
