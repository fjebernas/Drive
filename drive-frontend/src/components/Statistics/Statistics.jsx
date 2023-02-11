import { useEffect, useState } from "react";
import proverbService from "../../services/ProverbService";
import Countries from "./Countries";

function Statistics() {
  
  const [countries, setCountries] = useState([]);
  const [isLoadingCountries, setIsLoadingCountries] = useState(false);
  const [isErrorCountries, setIsErrorCountries] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      setIsLoadingCountries(true);
      setIsErrorCountries(false);

      await proverbService.getAllCountries()
        .then(res => {
          setCountries(res.data);
        })
        .catch(err => {
          console.error(err);
          setIsErrorCountries(true);
        });

      setIsLoadingCountries(false);
    }

    getCountries();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <h5 className="card-header">Statistics</h5>
            <div className="card-body text-start">
              <Countries
                countries={countries}
                isLoading={isLoadingCountries}
                isError={isErrorCountries}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;