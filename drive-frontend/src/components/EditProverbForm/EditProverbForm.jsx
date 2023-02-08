import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import proverbService from "../../services/ProverbService";
import InputText from "../common/InputText";
import InputTextArea from "../common/InputTextArea";

function EditProverbForm() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [proverb, setProverb] = useState({
    content: '',
    country: '',
  });

  useEffect(() => {
    proverbService.getById(id)
      .then(res => setProverb({...res.data}));
  }, [id]);

  const handleContentChange = (value) => {
    setProverb({...proverb, content: value});
  }

  const handleCountryChange = (value) => {
    setProverb({...proverb, country: value});
  }

  const handleClick = () => {
    proverbService.update(id, proverb)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <h5 className="card-header">Edit Proverb</h5>
            <div className="card-body">
              <form>
                <InputTextArea
                  name='Proverb'
                  rowSize={3}
                  onChange={handleContentChange}
                  value={proverb.content}
                />
                <InputText
                  name='Country'
                  onChange={handleCountryChange}
                  value={proverb.country}
                />
                <button
                  type="button"
                  className=" btn btn-lg btn-primary w-100"
                  onClick={handleClick}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProverbForm;