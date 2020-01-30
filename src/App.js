import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SearchHeader from "./Components/SearchHeader";
import ItemList from "./Components/ItemList";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import DisplayItem from "./Components/DisplayItem";
import Main from "./Main";
function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/tmdbsearch" component={Main} />
        <Route exact path={`/tmdbsearch/display/:id`} component={DisplayItem} />
      </Switch>
    </Provider>
  );
}

export default App;
