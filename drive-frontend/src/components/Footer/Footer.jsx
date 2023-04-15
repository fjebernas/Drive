function Footer(props) {
  return (
    <footer className="mb-0 mt-auto py-2 border-top bg-secondary">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h5 className="pt-2 pb-2">
              <span className='text-dark'>
                {props.appName} by
              </span>
              <a href="https://github.com/fjebernas/Simple-Todo-List" className="text-decoration-none text-primary" target="_blank" rel="noreferrer">&nbsp;Francis Bernas</a>
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;