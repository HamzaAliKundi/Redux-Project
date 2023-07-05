import * as types from "./ActionTypes";

const initialState = {
  posts: [],
  // loading: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        // loading: false,
      };

    default:
      return state;
  }
};

export default postsReducer;
