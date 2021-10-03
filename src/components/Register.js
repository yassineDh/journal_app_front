import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authUser } from "../redux/actions/action";
import { useHistory } from "react-router-dom";

function Register() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/register", values)
      .then((userData) => {
        localStorage.setItem("token", userData.data.token);
        dispatch(authUser(userData.data.username));
        history.push("/");
      });
  };

  let handleChangeUsername = (e) => {
    setValues({ ...values, username: e.target.value });
  };

  let handleChangePassword = (e) => {
    setValues({ ...values, password: e.target.value });
  };
  return (
    <form className="container mt-5" onSubmit={handleSubmit}>
      <h3>Register</h3>
      <div className="form-group row">
        <label htmlFor="title">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChangeUsername}
        />
      </div>
      <div className="form-group row">
        <label htmlFor="content">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChangePassword}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary row"
        disabled={!(values.username && values.password)}
      >
        Add
      </button>
    </form>
  );
}

export default Register;
