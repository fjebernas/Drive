function SearchBar() {
  return (
    <div className="input-group">
      <div className="form-outline w-75">
        <input
          type="search"
          id="search" 
          className="form-control"
          placeholder="Key word ..."
        />
      </div>
      <button type="button" className="btn btn-info w-25">
        Search
      </button>
    </div>
  );
}

export default SearchBar;