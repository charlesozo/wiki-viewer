import React from "react";
import { ImSearch } from "react-icons/im";
import { useData } from "./context";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const { setSearchTerm, searchTerm } = useData();
  const navigate = useNavigate();
  return (
    <div className="body">
      <div className="main">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          name="input"
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchTerm) {
              navigate("/search");
            } else if (e.key === "Enter" && !searchTerm) {
              alert("Please Type in a word to search");
            }
          }}
          className="input"
          placeholder="Search Something....."
        />
        <div className="icon">
          <ImSearch
            className="search"
            onClick={() => {
              if (searchTerm) {
                navigate("/search");
              } else {
                alert("Please Type in a word to search");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
