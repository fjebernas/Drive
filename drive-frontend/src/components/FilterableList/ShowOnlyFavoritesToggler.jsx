function ShowOnlyFavoritesToggler(props) {
  return (
    <div className="form-check form-switch d-flex justify-content-center align-items-center mt-2">
      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.handleTogglerChange} />
      <label className="form-check-label ms-1" htmlFor="flexSwitchCheckDefault">Show only favorites</label>
    </div>
  );
}

export default ShowOnlyFavoritesToggler;