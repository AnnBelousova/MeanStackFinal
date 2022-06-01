import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  let token = localStorage.getItem("token");
  function reloadToHomePage() {
    window.location.replace("http://localhost:3000");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img
            alt="Brand"
            className="img-responsive logo"
            src="/logo_main.png"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mob-navbar"
          aria-label="Toggle"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mb-2 mb-lg-0 mx-4">
            <li className="nav-item mx-5 ">
              {/* <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a> */}
              <Link className="nav-link" to="browse">
                Home
              </Link>
            </li>
            <li className="nav-item mx-5 ">
              <Link className="nav-link" to="aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown mx-4">
              <a
                className="nav-link dropdown-toggle"
                href="#ourservice"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="nav-link" to="deals">
                    Deal of the Day
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="newarrivals">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="wishlist">
                    Wish List
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="nav-link" to="policy">
                    Policy
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-link" to="giftcards">
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="contactus">
                Contact Us
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="userprofile">
                User Profile
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="help">
                Help
              </Link>
            </li>
          </ul>
          <form className="d-flex mx-5">
            {!token && (
              <>
                <Link to="/" className="btn btn-warning " type="submit">
                  {" "}
                  Login{" "}
                </Link>
                &nbsp;&nbsp;
                <Link to="register" className="btn btn-warning " type="submit">
                  {" "}
                  Register{" "}
                </Link>
              </>
            )}
            {token && (
              <>
                <Link
                  onClick={reloadToHomePage}
                  to="/"
                  className="btn btn-warning "
                  type="submit"
                >
                  {" "}
                  Logout{" "}
                </Link>
              </>
            )}
            {/* <span className="nav-item mx-0">
						<a  style={{color: 'rgba(255, 255, 255, 0.55)'}} className="nav-link" href="#login">
						Register</a>
					</span> */}
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
