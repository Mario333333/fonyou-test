import React, { Dispatch, useContext } from "react";
import Context from "../../utils/ts/contextType";
import { Character, DataToModal } from "../../utils/ts/componentTypes";
import app_context from "../../app_context";
interface Props {
  character: Character | null;
  setDataToModal: Dispatch<DataToModal>;
}
const CharacterInformation: React.FC<Props> = ({
  character,
  setDataToModal,
}) => {
  const context: Context = useContext(app_context);
  const { labels } = context;
  return character !== null ? (
    <div id="character-info" className="character-information">
      <span
        onClick={() => {
          setDataToModal({
            isVisible: false,
            data: null,
          });
        }}
      >
        X
      </span>
      <img src={character.image} alt="character"></img>
      <div>
        <h1>{character.name}</h1>
        <p>{`${labels?.status}: ${character.status}`}</p>
        <p>{`${labels?.species}: ${character.species}`}</p>
        <p>{`${labels?.gender}: ${character.gender}`}</p>
        <p>{`${labels?.origin}: ${character.origin.name}`}</p>
        <p>{`${labels?.location}: ${character.location.name}`}</p>
        <p>{`${labels?.type}: ${character.type}`}</p>
      </div>
    </div>
  ) : null;
};

export default CharacterInformation;
