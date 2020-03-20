import {ADD_POST_FAILURE, FETCH_COMMENTS_SUCCESS, FETCH_POSTS_SUCCESS} from "../actions/actionTypes";

const INITIAL_STATE = {
  posts: null,
  error: null
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POST_FAILURE:
      return {...state, error: action.error.response.data.message};
    case FETCH_POSTS_SUCCESS:
      return {...state, posts: action.posts};
    default: return state;
  }
};

export default postsReducer;