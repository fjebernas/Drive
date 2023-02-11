import { useEffect, useState } from "react";
import proverbService from "../../services/ProverbService";

function RandomProverb() {

  const [randomProverb, setRandomProverb] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    proverbService.getRandomProverb()
    .then(res => {
      setRandomProverb(res.data);
    }).catch(err => {
      setIsError(true);
      console.error(err);
    });

    setIsLoading(false);
  }, []);

  return (
    <>
      { isError && (<div className="alert alert-danger" role='alert'>An error occurred.</div>) }
      {
        isLoading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <figure className="text-center mt-2 mb-5">
            <blockquote className="blockquote">
              <h1 className="text-dark fs-1 py-3 fw-light">
                {randomProverb.content}
              </h1>
              <figcaption className="blockquote-footer">
                <cite title="source-title">{randomProverb.country}</cite>
              </figcaption>
            </blockquote>
          </figure>
        )
      }
    </>
  );
}

export default RandomProverb;