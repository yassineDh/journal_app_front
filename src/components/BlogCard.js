import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../redux/actions/action";
import axios from "axios";

function BlogCard(props) {
  let { title, content, _id } = props.blog;
  const dispatch = useDispatch();

  let handleDelete = (e) => {
    axios
      .delete(`https://journal-app-back.herokuapp.com/api/blogs/${_id}`)
      .then((data) => {
        dispatch(deleteBlog(_id));
      });
  };

  return (
    <div
      className="card col-xl-2 col-lg-4 col-md-4 col-sm-6 p-0 m-3"
      style={{ width: "18rem", height: "20rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p
          className="card-text"
          style={{ height: "200px", overflowY: "hidden" }}
        >
          {content}
        </p>

        <Link
          to={`/update/${_id}`}
          style={{ color: "whitesmoke", textDecoration: "none" }}
          className="btn btn-primary mx-4"
        >
          Update
        </Link>
        <button onClick={handleDelete} className="btn btn-warning mx-4">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
