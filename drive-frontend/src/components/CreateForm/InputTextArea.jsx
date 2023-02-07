function InputTextArea(props) {

  const handleChange = (e) => {
    props.onChange(e.target.value);
  }

  return (
    <>
      <label
        htmlFor={props.name}
        className="form-label"
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
      />
    </>
  );
}

export default InputTextArea;