/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, useContext, useEffect, useRef, useState } from "react";
import app_context from "../../app_context";
import Context from "../../utils/ts/contextType";
import CharacterCard from "../../components/CharacterCard";
import CharacterInformation from "../../components/CharacterInformation";
import { Character, DataToModal, State } from "../../utils/ts/componentTypes";
import { setCharacters } from "../../redux/actions/characters";
import { connect } from "react-redux";

const Home = () => {
  const context: Context = useContext(app_context);
  const [dataToModal, setDataToModal] = useState<DataToModal>({
    isVisible: false,
    data: null,
  });

  const { data } = context;

  return (
    <>
      <div
        id={"home"}
        className="home-container"
        onClick={() => {
          if (dataToModal.isVisible === true) {
            setDataToModal({ isVisible: false, data: null });
          }
        }}
      >
        {data !== null &&
          data !== undefined &&
          data.map((item, index) => {
            return (
              <CharacterCard
                key={index}
                character={item}
                setDataToModal={setDataToModal}
              />
            );
          })}
      </div>
      {dataToModal.isVisible && (
        <CharacterInformation
          character={dataToModal.data}
          setDataToModal={setDataToModal}
        />
      )}
    </>
  );
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  setCharacters: (data: Array<Character>) => dispatch(setCharacters(data)),
});
const mapStateToPros = (state: State) => ({});
export default connect(mapStateToPros, mapDispatchToProps)(Home);
