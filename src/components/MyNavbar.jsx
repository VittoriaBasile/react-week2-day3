import { Component } from "react";
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";
import avatarSmall from "../assets/avatar.png";

class MyNavbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid px-5">
            <a className="navbar-brand" href="#1">
              <img src={logo} alt="logo" id="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    Tv Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    Recently Added
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    My List
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    KIDS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bell-fill icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>
                  </a>
                </li>

                <li className="nav-item">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn dropdown-toggle text-secondary border-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={avatar} alt="avatar" id="avatar" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#1">
                          <div className="d-flex align-items-center">
                            <img src={avatarSmall} alt="avatar-small" id="avatar-small" />
                            Epicoder #1
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#1">
                          Manage Profiles
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#1">
                          Account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#1">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#1">
                          Signout Netflix
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default MyNavbar;
