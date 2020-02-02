import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import { Provider } from "react-redux";
import store from "./Redux/Store";
import DisplayItem from "./Components/DisplayItem";
import Main from "./Main";
function App() {
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
