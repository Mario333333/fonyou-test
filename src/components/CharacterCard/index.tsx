import React, { Dispatch } from "react";
import { Character, DataToModal } from "../../utils/ts/componentTypes";
interface Props {
  character: Character;
  setDataToModal: Dispatch<DataToModal>;
}
const CharacterCard: React.FC<Props> = ({ character, setDataToModal }) => {
  const handleClickCard = () => {
    setDataToModal({
      isVisible: true,
      data: character,
    });
  };
  return (
    <div className="character" onClick={handleClickCard}>
      <img src={character.image} alt="character"></img>
      <div>
        <h1>{character.name}</h1>
      </div>
    </div>
  );
};
export default CharacterCard;
