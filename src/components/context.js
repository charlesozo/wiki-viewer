import { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";
const contextApi = createContext(null);
export const Context = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
          params: {
            action: "query",
            format: "json",
            list: "search",
            srsearch: searchTerm,
            utf8: 1,
            formatversion: 2,
            origin: "*",
          },
        });
          console.log(response.data.query.search)
        setResults(response.data.query.search);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);
  return <contextApi.Provider value={{setSearchTerm,searchTerm,results,loading,error}}>{children}</contextApi.Provider>;
};

export const useData = () => {
  return useContext(contextApi);
};
