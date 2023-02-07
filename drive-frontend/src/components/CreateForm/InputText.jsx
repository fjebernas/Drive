function InputText(props) {

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
      <input
        type='text'
        name={props.name}
        id={props.name}
        className="form-control"
        placeholder='e.g. The World.'
        onChange={handleChange}
      />
    </>
  );
}

export default InputText;