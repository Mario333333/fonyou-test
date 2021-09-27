import { Dispatch, useContext, useState } from "react";
import axios from "../../../../utils/services/intance";
import app_context from "../../../../app_context";
import Context from "../../../../utils/ts/contextType";
import { connect } from "react-redux";
import { Character, State } from "../../../../utils/ts/componentTypes";
import { setCharacters } from "../../../../redux/actions/characters";

const Navbar = ({ setCharacters }: any) => {
  const [search, setSearch] = useState("");

  const context: Context = useContext(app_context);
  const { labels } = context;

  const handleSearch = ({ target }: any) => {
    setSearch(target.value);
    // eslint-disable-next-line react-hooks/rules-of-hooks
  };

  const searchCharacter = async () => {
    try {
      const response = await axios.get("character", {
        params: { name: search },
      });
      setCharacters(response.data.results);
    } catch (error) {
      console.log(error);
    }
    setSearch("");
  };

  const updateSearch = async () => {
    try {
      const response = await axios.get("character");
      setCharacters(response.data.results);
      setSearch("");
    } catch (error) {
      console.log(error);
    }
    setSearch("");
  };

  return (
    <nav className="menu">
      <ul>
        <li className="search-component">
          <input type="text" value={search} onChange={handleSearch} />
          <button onClick={searchCharacter}>{labels?.search}</button>
        </li>
        <li className="search-component">
          <button onClick={updateSearch}>{labels?.reload}</button>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state: State) => {
  const { characters } = state;
  return characters;
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  setCharacters: (data: Array<Character>) => dispatch(setCharacters(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
