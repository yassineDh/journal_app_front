import { combineReducers } from "redux";
import { GET_BLOGS } from "./types/types";
import { DELETE_BLOG } from "./types/types";
import { AUTH_USER } from "./types/types";

const initialState = {
  blogs: [],
  userName: "",
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BLOG:
      let newArr = { ...state };
      let newBlogs = newArr.blogs.filter((blog) => blog._id != action.payload);
      return { ...state, blogs: newBlogs };
    case GET_BLOGS:
      return { ...state, blogs: action.payload };
    case AUTH_USER:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
