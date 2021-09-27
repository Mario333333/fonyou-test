import { createStore, combineReducers } from "redux";

import characters from "./reducers/characters";

const reducers = combineReducers({
  characters,
});

export default createStore(reducers);
