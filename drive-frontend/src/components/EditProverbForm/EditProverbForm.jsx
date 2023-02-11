import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import proverbService from "../../services/ProverbService";
import { InputText, InputTextArea } from "../common";
import DeleteButton from "./DeleteButton";
import { NotificationManager } from 'react-notifications';

function EditProverbForm() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [proverb, setProverb] = useState({
    content: '',
    country: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProverb = async () => {
      setIsError(false);
      setIsLoading(true);

      await proverbService.getById(id)
      .then(res => {
        setProverb({...res.data});
      })
      .catch(err => {
        setIsError(true);
        console.error(err);
      });

      setIsLoading(false);
    }

    getProverb();
  }, [id]);

  const handleContentChange = (value) => {
    setProverb({...proverb, content: value});
  }

  const handleCountryChange = (value) => {
    setProverb({...proverb, country: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    proverbService.update(id, proverb)
      .then(() => {
        navigate('/');
        NotificationManager.info('Updated proverb!', 'Successful!', 2000);
      })
      .catch(err => {
        console.error(err);
        NotificationManager.error(`Can't update proverb`, 'Something went wrong.', 2000);
      });
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <h5 className="card-header">Edit Proverb</h5>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                { isError && (<div className="alert alert-danger" role='alert'>An error occurred.</div>) }
                {
                  isLoading ? (
                    <>
                      <div className="mb-3 d-flex flex-column">
                        <label
                          className="form-label align-self-start text-capitalize"
                        >
                          Proverb
                        </label>
                        <input
                          type='text'
                          className="form-control"
                          placeholder='Loading ...'
                        />
                      </div>
                      <div className="mb-3 d-flex flex-column">
                        <label
                          className="form-label align-self-start text-capitalize"
                        >
                          Country
                        </label>
                        <textarea
                          rows={3}
                          className="form-control"
                          placeholder='Loading ...'
                        />
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-8">
                            <button
                              type="button"
                              className=" btn btn-warning w-100"
                              disabled
                            >
                              Update
                            </button>
                          </div>
                          <div className="col-4">
                            <button
                              type="button"
                              className=" btn btn-danger w-100"
                              disabled
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
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
                              type="submit"
                              className=" btn btn-warning w-100"
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
                    </>
                  )
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProverbForm;