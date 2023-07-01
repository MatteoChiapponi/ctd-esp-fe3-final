export function validarEmail(email) {
  const patron = /^[\w.-]+@[\w.-]+\.\w+$/;
  return patron.test(email);
}
export function reducer(state, action) {
  switch (action.type) {
    case "add fav": {
      const newFavs = [...state.favs, action.payload];
      const newState = { ...state, favs: newFavs };
      localStorage.setItem("favs", JSON.stringify(newFavs));
      return newState;
    }
    case "remove fav": {
      const newFavs = state.favs.filter(
        (dentist) => dentist.id !== action.payload
      );
      const newState = { ...state, favs: newFavs };
      localStorage.setItem("favs", JSON.stringify(newFavs));
      return newState;
    }
    case "getDentists": {
      return { ...state, dentists: action.payload };
    }
    case "theme": {
      localStorage.setItem("theme", JSON.stringify(!state.theme));
      return { ...state, theme: action.payload };
    }
    default:
      throw new Error("action type not supported");
  }
}
