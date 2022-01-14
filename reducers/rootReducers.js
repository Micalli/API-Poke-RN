import { combineReducers } from "redux";
import pokemonListReducer from "./PokemonsListReducers";
import pokemonReducers from "./PokemonReducers";

const rootReducer = combineReducers({
  PokemonList: pokemonListReducer,
  Pokemon: pokemonReducers,
});

export default rootReducer;
