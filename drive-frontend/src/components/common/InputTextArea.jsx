function InputTextArea(props) {

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
      <textarea
        rows={props.rowSize}
        name={props.name}
        id={props.name}
        className="form-control"
        placeholder='e.g. The quick brown fox jumps over the lazy dog.'
        onChange={handleChange}
        value={props.value}
      />
    </div>
  );
}

export default InputTextArea;