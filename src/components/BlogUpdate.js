import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function BlogUpdate(props) {
  const username = useSelector((state) => state.userName);
  const history = useHistory();
  const { id } = useParams();
  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  const [oldBlog, setoOldBlog] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`).then((blog) => {
      setoOldBlog(blog.data);
      setValues({ title: blog.data.title, content: blog.data.content });
    });
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    let newBlog = { ...oldBlog, ...values };

    axios.put(`http://localhost:5000/api/blogs/${id}`, newBlog).then((data) => {
      history.push("/");
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
      <h3>Update blog</h3>
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
        Update
      </button>
    </form>
  );
}

export default BlogUpdate;
