import React from "react";

import "./App.css";
import SearchHeader from "./Components/SearchHeader";
import ItemList from "./Components/ItemList";
import { Provider } from "react-redux";
import store from "./Redux/Store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchHeader />
        <ItemList />
      </div>
    </Provider>
  );
}

export default App;
