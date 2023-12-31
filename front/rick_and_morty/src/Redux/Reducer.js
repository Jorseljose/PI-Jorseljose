const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharactersFav: action.payload,
      };

    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharactersFav: action.payload,
      };

    case "FILTER":
      const allCharactersFiltered = state.allCharactersFav.filter(
        (charater) => charater.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharactersFiltered,
      };

    case "ORDER":
      const allCharactersFavcopy = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersFavcopy.sort((a, b) => a.id - b.id)
            : allCharactersFavcopy.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
