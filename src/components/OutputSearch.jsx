import React, { Suspense } from "react";
import { useData } from "./context";
import { htmlToText } from "html-to-text";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const OutputSearch = () => {
  const navigate = useNavigate();
  const { results, loading, error, searchTerm } = useData();
  console.log(results);
  return (
    <Suspense
      fallback={
        <div style={{ fontSize: "30px", color: "orange" }}>Loading...</div>
      }
    >
      <div className="output">
        <header>
          <h2
            style={{
              color: "#e67e22",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            Search result for - {searchTerm}
          </h2>
        </header>
        {loading && <h3>Loading...</h3>}
        {error && (
          <p style={{ fontSize: "20px", color: "#fb280b" }}>
            An error occurred: {error.message}
          </p>
        )}
        <div className="main-context">
          {results && results.length > 0 ? (
            results.map((result) => {
              console.log(result.snippet);
              const text = htmlToText(result.snippet, {
                wordwrap: 130,
              });

              return (
                <a
                  href={`https://en.wikipedia.org/wiki/${searchTerm}`}
                  alt=""
                  className="result-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>{text}</div>
                </a>
              );
            })
          ) : (
            <div className="result-search">No matching result found</div>
          )}
          <div className="button-back">
            <BsFillArrowLeftCircleFill
              className="go-back"
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default OutputSearch;
