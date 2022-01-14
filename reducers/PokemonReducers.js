const DefaultState = {
  loading: false,
  data: {},
  errorMsg: "",
  count: 0,
};

const pokemonReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "ONE_POKEMON_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "ONE_POKEMON_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Pokemon não encontrado",
      };
    case "ONE_POKEMON_SUCCESS":
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default pokemonReducer;
