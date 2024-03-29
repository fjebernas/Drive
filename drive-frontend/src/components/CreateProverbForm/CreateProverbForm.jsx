import { useState } from "react";
import { useNavigate } from "react-router-dom";
import proverbService from "../../services/ProverbService";
import { InputText, InputTextArea } from "../common";
import { NotificationManager } from 'react-notifications';


function CreateProverbForm() {

  const navigate = useNavigate();

  const [proverb, setProverb] = useState({
    content: '',
    country: '',
  });

  const handleContentChange = (value) => {
    setProverb({...proverb, content: value});
  }

  const handleCountryChange = (value) => {
    setProverb({...proverb, country: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    proverbService.store(proverb)
      .then(() => {
        navigate('/');
        NotificationManager.success('Added new proverb!', 'Successful!', 2000);
      })
      .catch(err => {
        console.error(err);
        NotificationManager.error(`Can't create proverb`, 'Something went wrong.', 2000);
      });
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <h5 className="card-header">Add Proverb</h5>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <InputTextArea
                  name='proverb'
                  rowSize={3}
                  onChange={handleContentChange}
                />
                <InputText
                  name='country'
                  onChange={handleCountryChange}
                />
                <button
                  type="submit"
                  className=" btn btn-lg btn-primary w-100"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProverbForm;