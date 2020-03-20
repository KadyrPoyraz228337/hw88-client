import {FETCH_COMMENTS_SUCCESS, FETCH_POST_SUCCESS} from "../actions/actionTypes";

const INITIAL_STATE = {
  comments: null,
  post: null
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return {...state, post: action.post};
    case FETCH_COMMENTS_SUCCESS:
      return {...state, comments: action.comments};
    default: return state
  }
};

export default postReducer;