import { useEffect, useState } from "react";
import proverbService from "../../services/ProverbService";
import RandomProverb from "../RandomProverb/RandomProverb";
import ProverbsList from "./ProverbsList";
import SearchBar from "./SearchBar";

function FilterableList() {
  const [proverbs, setProverbs] = useState([]);
  const [filterText, setFilterText] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProverbs = async () => {
      setIsError(false);
      setIsLoading(true);
  
      await proverbService.getAll()
        .then(res => {
          setProverbs(res.data);
        })
        .catch(err => {
          setIsError(true);
          console.log(err);
        });
  
      setIsLoading(false);
    }

    getProverbs();
  }, []);

  const handleFilterTextChange = (text) => {
    setFilterText(text);
  }

  return (
    <div className="container mt-2">
      <RandomProverb />
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          <SearchBar handleChange={handleFilterTextChange} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          { isError && (<div className="alert alert-danger" role='alert'>An error occurred.</div>) }
          {
            isLoading ? (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : <ProverbsList proverbs={proverbs} filterText={filterText} />
          }
        </div>
      </div>
    </div>
  );
}

export default FilterableList;