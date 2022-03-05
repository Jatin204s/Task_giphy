import React from "react";
import "../App.css";

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++)
    pageNumbers.push(i);
  return (
    <nav className="nav">
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li>
              <a onClick={() => props.pageSelected(number)}>{number}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
