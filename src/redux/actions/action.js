import { GET_BLOGS } from "../types/types";
import { DELETE_BLOG } from "../types/types";
import { AUTH_USER } from "../types/types";

export const getBlogs = (data) => {
  return {
    type: GET_BLOGS,
    payload: data,
  };
};

export const deleteBlog = (blogId) => {
  return {
    type: DELETE_BLOG,
    payload: blogId,
  };
};

export const authUser = (userName) => {
  return {
    type: AUTH_USER,
    payload: userName,
  };
};
