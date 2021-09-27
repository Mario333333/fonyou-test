import { Character, State } from "../../utils/ts/componentTypes";

const initialState: State = {
  characters: null,
};

const charactersReducer = (
  state = initialState,
  action: { type: string; data: Array<Character> }
) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      return {
        ...state,
        characters: action.data,
      };
    default:
      return state;
  }
};

export default charactersReducer;
