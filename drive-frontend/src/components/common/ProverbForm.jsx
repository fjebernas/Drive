import { useEffect, useState } from "react";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";

function ProverbForm(props) {

  const [data, setData] = useState({
    content: '',
    country: '',
  });

  const handleContentChange = (value) => {
    setData({...data, content: value});
  }

  const handleCountryChange = (value) => {
    setData({...data, country: value});
  }

  const handleClick = (e) => {
    e.preventDefault();
    props.onSubmit({...data});
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <h5 className="card-header">{props.formName}</h5>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <InputTextArea
                    name='Proverb'
                    rowSize={3}
                    onChange={handleContentChange}
                  />
                </div>
                <div className="mb-3">
                  <InputText
                    name='Country'
                    onChange={handleCountryChange}
                  />
                </div>
                <button
                  type="button"
                  className=" btn btn-lg btn-primary w-100"
                  onClick={handleClick}
                >
                  {props.buttonName}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProverbForm;