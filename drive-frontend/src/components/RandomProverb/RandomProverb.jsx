import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import proverbService from "../../services/ProverbService";

function RandomProverb() {

  const [randomProverb, setRandomProverb] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getRandomProverb = async () => {
    setIsError(false);
    setIsLoading(true);

    await proverbService.getRandomProverb()
    .then(res => {
      setRandomProverb(res.data);
    }).catch(err => {
      setIsError(true);
      console.error(err);
    });

    setIsLoading(false);
  }

  useEffect(() => {
    getRandomProverb();
  }, []);

  return (
    <div className="container mt-4 mb-5">
      { isError && (<div className="alert alert-danger" role='alert'>An error occurred.</div>) }
      {
        isLoading ? (
          <div className="spinner-border text-primary mt-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <figure className="text-center position-relative">
            <blockquote className="blockquote">
              <h1 className="text-dark fs-1 py-3 fw-light">
                {randomProverb.content}
              </h1>
              <figcaption className="blockquote-footer">
                <cite title="source-title">{randomProverb.country}</cite>
              </figcaption>
            </blockquote>
            <button
              className="btn btn-sm btn-outline-success position-absolute top-0 start-50 translate-middle border-0"
              onClick={getRandomProverb}
            >
              <FontAwesomeIcon icon='shuffle' size="xl" />
            </button>
          </figure>
        )
      }
    </div>
  );
}

export default RandomProverb;