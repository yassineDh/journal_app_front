import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../redux/actions/action";
import axios from "axios";
import BlogCard from "./BlogCard";
import { useHistory } from "react-router-dom";

function Blogs() {
  // const [blogList, setBlogList] = useState([]);

  axios.interceptors.request.use(
    function (response) {
      if (localStorage.getItem("token")) {
        response.headers = {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
      }
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const blogs = useSelector((state) => state.blogs);
  const username = useSelector((state) => state.userName);
  useEffect(() => {
    axios
      .get("https://journal-app-back.herokuapp.com/api/blogs", {
        params: { userId: username },
      })
      .then((blogsList) => {
        dispatch(getBlogs(blogsList.data));
      });
  }, []);
  return (
    <React.Fragment>
      <div>
        <div className="container-fluid">
          <div className="row">
            <button type="button" className="btn btn-primary m-3">
              <Link
                to="/add"
                style={{ color: "whitesmoke", textDecoration: "none" }}
              >
                Add blog
              </Link>
            </button>
          </div>
          <div className="row">
            {blogs.length !== 0 ? (
              blogs.map((blog, i) => <BlogCard key={i} blog={blog} />)
            ) : (
              <p>No blogs</p>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Blogs;
