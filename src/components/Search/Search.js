import React from "react";
import "./Search.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Search = ({ updateStateWithSearchInput, searchInput}) => {
  return(
    <div
      className="search-container"
      data-testid="search-container"
      >
      <form>
        <input id="search-input" placeholder="Search all popular fish…" onChange={updateStateWithSearchInput}></input>
        <br />
        <Link to={'/search-fish/'+ searchInput}>
        <button type="submit">Find My Fish</button>
        </ Link>
      </form>
    </div>
  )
}

Search.propTypes = {
  updateStateWithSearchInput: PropTypes.func,
  searchInput: PropTypes.string,
};

export default Search;
