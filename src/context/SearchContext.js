import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "gD48XjQJ8zjKliOIGAoizRksTstGeyEe",
          limit: 100,
        },
      });

      setData(results.data.data);
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <SearchContext.Provider value={[data, setData]}>
      {props.children}
    </SearchContext.Provider>
  );
};
