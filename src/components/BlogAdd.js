import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function BlogAdd() {
  const username = useSelector((state) => state.userName);
  const history = useHistory();
  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    let blogVal = { ...values, author: username };
    axios.post("http://localhost:5000/api/blogs", blogVal).then((data) => {
      setValues({
        title: "",
        content: "",
      });
    });
  };

  let handleChangeTitle = (e) => {
    setValues({ ...values, title: e.target.value });
  };

  let handleChangeContent = (e) => {
    setValues({ ...values, content: e.target.value });
  };
  return (
    <form className="container mt-5" onSubmit={handleSubmit}>
      <div className="form-group row">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={values.title}
          onChange={handleChangeTitle}
        />
      </div>
      <div className="form-group row">
        <label htmlFor="content">Content</label>
        <textarea
          type="text"
          className="form-control"
          id="content"
          name="content"
          value={values.content}
          onChange={handleChangeContent}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary row"
        disabled={!(values.title && values.content)}
      >
        Add
      </button>
    </form>
  );
}

export default BlogAdd;
