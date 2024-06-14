const Header = () =>{
    return(
      <nav className="navbar p-0 navbar-expand-sm bg-grey navbar-light">
      <div className="container-fluid">
          <a className="navbar-brand" href="#">
              {/* <img src={logo} style={{ width: '42px', margin: '3px' }} alt="Logo" /> */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">About Us</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Contact📞</a>
                  </li>    
                  <li className="nav-item">
                      <a className="nav-link" href="#">Cart🛒</a>
                  </li>   
              </ul>
          </div>
      </div>
  </nav>
);
};

export default Header;