import React, { useEffect, useState } from "react";
import "./ItemList.scss";
import { connect } from "react-redux";
import { getItems } from "./fetchItems";
import Item from "./Item";

function ItemList({ search, type }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (search.length > 0) {
      getItems(search, type).then(data => {
        setItems(data.results);
      });
    }
  }, [search, type]);

  const render =
    items.length > 0 &&
    items.map(item => {
      return <Item item={item} key={item.id} />;
    });
  return (
    <div className="list">
      <div className="list-container">{render}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    search: state.search.search,
    type: state.search.type
  };
};

export default connect(mapStateToProps)(ItemList);
