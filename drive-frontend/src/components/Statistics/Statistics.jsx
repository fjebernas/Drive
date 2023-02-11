import { useEffect, useState } from "react";
import proverbService from "../../services/ProverbService";

function Statistics() {
  
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = () => {
      proverbService.getAllCountries()
        .then(res => {
          setCountries(res.data);
        })
        .catch(err => {
          console.error(err);
        });
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
              <div className="accordion" id="accordionStatistics">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      <span>Countries</span>
                      <span className="text-muted fst-italic ms-2">{countries.length}</span>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionStatistics"
                  >
                    <ul className="list-group">
                      {
                        countries.map(country => <li key={country} className="list-group-item">{country}</li>)
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;