import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Router,
  withRouter
} from "react-router-dom";
import "./App.css";
import SearchHeader from "./Components/SearchHeader";
import ItemList from "./Components/ItemList";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import DisplayItem from "./Components/DisplayItem";
import Main from "./Main";
function App({ history }) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/tmdbsearch" component={Main} />
          <Route
            exact
            path={`/tmdbsearch/display/:id`}
            component={DisplayItem}
          />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
