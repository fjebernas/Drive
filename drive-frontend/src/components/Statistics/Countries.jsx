function Countries(props) {
  return (
    <div className="accordion" id="accordionStatistics">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
          >
            <span>Countries</span>
            <span className="text-muted fst-italic ms-2">
              {
                props.isError ? <span className="text-danger">An error occured</span>
                : props.isLoading ? (
                  <div className="spinner-border spinner-border-sm text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : <span>{props.countries.length}</span>
              }
            </span>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionStatistics"
        >
          <ul className="list-group">
            {
              props.countries.map(country => <li key={country} className="list-group-item">{country}</li>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Countries;