import { useEffect, useState } from "react";
import proverbService from "../../services/ProverbService";
import ProverbsList from "./ProverbsList";
import SearchBar from "./SearchBar";
import ShowOnlyFavoritesToggler from "./ShowOnlyFavoritesToggler";

function FilterableList() {
  const [proverbs, setProverbs] = useState([]);
  const [filterText, setFilterText] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isShowingFavoritesOnly, setIsShowingFavoritesOnly] = useState(false);

  const getProverbs = async () => {
    setIsError(false);
    setIsLoading(true);

    await proverbService.getAll()
      .then(res => {
        setProverbs(res.data);
        setIsShowingFavoritesOnly(false);
      })
      .catch(err => {
        setIsError(true);
        console.log(err);
      });

    setIsLoading(false);
  }

  useEffect(() => {
    getProverbs();
  }, []);

  const handleFilterTextChange = (text) => {
    setFilterText(text);
  }

  const handleFavoriteButtonClick = () => {
    getProverbs();
  }

  const handleTogglerChange = () => {
    setIsShowingFavoritesOnly(!isShowingFavoritesOnly);
  }

  return (
    <div className="container mt-2">
      { isError && (<div className="alert alert-danger" role='alert'>An error occurred.</div>) }
      {
        isLoading ? (
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <div className="row mt-3">
              <div className="col-md-6 offset-md-3">
                <SearchBar handleChange={handleFilterTextChange} />
                <ShowOnlyFavoritesToggler handleTogglerChange={handleTogglerChange} />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <ProverbsList
                  proverbs={isShowingFavoritesOnly ? proverbs.filter(proverb => proverb.favorite) : proverbs}
                  filterText={filterText}
                  handleFavoriteButtonClick={handleFavoriteButtonClick}
                />
              </div>
            </div>
          </>
        )
      }
    </div>
  );
}

export default FilterableList;