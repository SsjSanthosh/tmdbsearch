import React, { useState } from "react";
import "./Header.scss";
import { updateSearch } from "./../Redux/searchActions";
import { connect } from "react-redux";

function SearchHeader(props) {
  const { search, updateSearch } = props;

  const [option, setOption] = useState("movie");
  const handleSearchChange = e => {
    updateSearch({
      search: e.target.value,
      type: option
    });
  };

  return (
    <div className="header">
      <div className="header-container">
        <input
          type="text"
          placeholder="Enter query"
          onChange={handleSearchChange}
          value={search}
        />
        <select
          className="type"
          value={option}
          onChange={e => setOption(e.target.value)}
        >
          <option value="movie">Movies</option>
          <option value="tv">TV shows</option>
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    search: state.search.search
  };
};

export default connect(mapStateToProps, { updateSearch })(SearchHeader);
