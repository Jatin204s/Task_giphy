import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import "../App.css";
import Pagination from "./Pagination";

const Giphy = () => {
  const [data] = useContext(SearchContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageSelected = (pageNumber) => {
    setInterval(() => {}, 5000);
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Pagination
        pageSelected={pageSelected}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
      />
      {currentItems.map((el) => {
        return (
          <div
            className="container"
            style={{
              display: "inline-flex",
              width: "fit-content",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <div
              className="card"
              key={el.id}
              style={{
                width: "23rem",
                height: "20rem",
                flexWrap: "wrap",
                display: "inline-flex",
                marginLeft: "35%",
                marginBottom: "5%",
                boxShadow: "2px 2px 2px 2px #888888",
              }}
            >
              <div className="card-body">
                <img
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                  className="gif"
                  src={el.images.fixed_height.url}
                  alt="gif"
                ></img>
                <h5 className="card-title">{el.title}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Giphy;
