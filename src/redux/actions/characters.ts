import { SetCharacter } from "../../utils/ts/functionTypes";

export const setCharacters: SetCharacter = (data) => ({
  type: "SET_CHARACTERS",
  data,
});
