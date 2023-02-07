import { useNavigate } from "react-router-dom";

function Header(props) {

  const navigate = useNavigate();

  const goTo = (e) => {
    navigate(e.target.dataset.url);
  }

  return (
    <nav className="navbar bg-dark navbar-dark">
      <div className="container justify-content-center flex-column">
        <button className="navbar-brand d-block fs-1 fw-light text-primary btn btn-link text-center m-0" type="button">{props.title}</button>
        <ul className="navbar-nav flex-row fs-5">
          {
            props.navItems.map(navItem => (
              <li key={navItem.name} className="nav-item px-3">
                <button
                  className='btn btn-link nav-link'
                  onClick={goTo}
                  data-url={navItem.url}
                >
                  {navItem.name}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}

export default Header;