import React, { useState, useContext } from "react";
import axios from "axios";
import { SearchContext } from "../context/SearchContext";
import "../App.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useContext(SearchContext);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "gD48XjQJ8zjKliOIGAoizRksTstGeyEe",
        q: search,
        limit: 100,
      },
    });
    setData(results.data.data);
  };
  return (
    <div>
      <form className="searchBar">
        <input
          value={search}
          onChange={handleSearchChange}
          type="text"
          placeholder="Search"
          className="formControl"
        ></input>
        <button onClick={handleSubmit} type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
