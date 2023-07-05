import * as types from "./ActionTypes";
import axios from "axios";

export const Fetch_Posts = () => {
  return async function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("Actions :", res);
        dispatch({
          type: types.FETCH_POSTS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log("Fetching Data Error : ", error);
      });
  };
};
