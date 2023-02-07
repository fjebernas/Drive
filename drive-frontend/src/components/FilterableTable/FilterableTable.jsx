import { useEffect, useState } from "react";
import proverbService from "../../services/ProverbService";
import ProverbsTable from "./ProverbsTable";
import SearchBar from "./SearchBar";

function FilterableTable() {
  const [proverbs, setProverbs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProverbs();
  }, []);

  const getProverbs = async () => {
    setIsLoading(true);

    await proverbService.getAll()
      .then(res => setProverbs(res.data))
      .catch(err => console.log(err));

    setIsLoading(false);
  }

  return (
    <div className="container pt-5">
      <div className="row mb-3">
        <div className="col-md-6 offset-md-3">
          <SearchBar />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <ProverbsTable
            proverbs={proverbs}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterableTable;