import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../redux/actions/action";
import { useHistory } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.userName);
  const history = useHistory();

  let handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(authUser(""));
    history.push("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  justify-content-between">
      <Link to="/" className="navbar-brand">
        Journal app
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        {username ? (
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button className="nav-link" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <li>
              <Link to="/login" className="navbar-brand">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="navbar-brand">
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
