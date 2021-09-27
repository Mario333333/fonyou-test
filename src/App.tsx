import { Dispatch, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./views/Home";
import languages from "./utils/i18n/lang";
import AppContext from "./app_context";
import MainLayout from "./containers/MainLayout";
import { Language } from "./utils/ts/languages";
import useAxios from "./hooks/useAxios";
import { getURLByRouteName } from "./utils/routes";
import { setCharacters } from "./redux/actions/characters";
import { Character, Characters, State } from "./utils/ts/componentTypes";

const App = ({ characters, setCharacters }: any) => {
  const { data } = useAxios<Characters>("character", null);
  const [currentLanguage, setCurrentlanguage] = useState<string>("es");
  const [labels] = useState<Language>(languages["es"]);

  useEffect(() => {
    if (data !== null) {
      setCharacters(data.results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <AppContext.Provider
      value={{
        labels,
        currentLanguage,
        setCurrentlanguage,
        data: characters,
      }}
    >
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={getURLByRouteName("home")} component={Home} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
const mapStateToProps = (state: State) => {
  const { characters } = state;
  return characters;
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  setCharacters: (data: Array<Character>) => dispatch(setCharacters(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
