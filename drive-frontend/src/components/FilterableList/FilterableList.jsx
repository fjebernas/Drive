import { useEffect, useState } from "react";
import proverbService from "../../services/ProverbService";
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
        .then(res => {setProverbs(res.data)})
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
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SearchBar handleChange={handleFilterTextChange} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <h5 className="fst-italic text-muted fw-light">Showing {proverbs.length} proverbs</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          { isError && (<div className="alert alert-danger" role='alert'>An error occurred.</div>) }
          {
            isLoading ? <p className="fst-italic text-muted text-center mt-4">Loading ...</p>
                      : <ProverbsList proverbs={proverbs} filterText={filterText} />
          }
        </div>
      </div>
    </div>
  );
}

export default FilterableList;