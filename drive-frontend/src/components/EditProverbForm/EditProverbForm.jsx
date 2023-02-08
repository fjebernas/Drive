import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import proverbService from "../../services/ProverbService";
import InputText from "../common/InputText";
import InputTextArea from "../common/InputTextArea";
import DeleteButton from "./DeleteButton";

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
                  name='proverb'
                  rowSize={3}
                  onChange={handleContentChange}
                  value={proverb.content}
                />
                <InputText
                  name='country'
                  onChange={handleCountryChange}
                  value={proverb.country}
                />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-8">
                      <button
                        type="button"
                        className=" btn btn-warning w-100"
                        onClick={handleClick}
                      >
                        Update
                      </button>
                    </div>
                    <div className="col-4">
                      <DeleteButton
                        id={id}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProverbForm;