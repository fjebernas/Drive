function InputText(props) {

  const handleChange = (e) => {
    props.onChange(e.target.value);
  }

  return (
    <div className="mb-3 d-flex flex-column">
      <label
        htmlFor={props.name}
        className="form-label align-self-start text-capitalize"
      >
        {props.name}
      </label>
      <input
        type='text'
        name={props.name}
        id={props.name}
        className="form-control"
        placeholder='e.g. The World.'
        onChange={handleChange}
        value={props.value}
        autoComplete='off'
      />
    </div>
  );
}

export default InputText;