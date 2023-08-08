import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Nav(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
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
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* we have disabled the About page just to deploy it on github pages */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>

            {/* <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                style={{ height: "20px", width: "20px" }}
                onClick={() => {
                  props.toggleMode("primary");
                }}
                cursor="pointer"
              ></div>
              <div
                className="bg-success rounded mx-2"
                style={{ height: "20px", width: "20px" }}
                onClick={() => {
                  props.toggleMode("success");
                }}
                cursor="pointer"
              ></div>
              <div
                className="bg-danger rounded mx-2"
                style={{ height: "20px", width: "20px" }}
                onClick={() => {
                  props.toggleMode("danger");
                }}
                cursor="pointer"
              ></div>
              <div
                className="bg-warning rounded mx-2"
                style={{ height: "20px", width: "20px" }}
                onClick={() => {
                  props.toggleMode("warning");
                }}
                cursor="pointer"
              ></div>
            </div> */}

            <div className="form-check form-switch">
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.labelText}
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() => {
                  props.toggleMode(null);
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
export default Nav;

Nav.defaultProps = {
  title: "Set title here",
  aboutText: "About text here",
};
