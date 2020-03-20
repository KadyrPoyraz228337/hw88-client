import axiosForum from "../../axiosConfig";
import {push} from 'connected-react-router';
import {
  ADD_POST_FAILURE,
  ADD_COMMENT_SUCCESS,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FETCH_COMMENTS_SUCCESS
} from "./actionTypes";

export const addPostFailure = error => ({type: ADD_POST_FAILURE, error});
export const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, posts});
export const fetchPostSuccess = post => ({type: FETCH_POST_SUCCESS, post});
export const fetchCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, comments});
export const addComment = () => ({type: ADD_COMMENT_SUCCESS});

export const fetchPost = id => async dispatch => {
  try {
    const resp = await axiosForum.get('/posts/'+id);
    dispatch(fetchPostSuccess(resp.data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchPosts = () => async dispatch => {
  try {
    const resp = await axiosForum.get('/posts');
    dispatch(fetchPostsSuccess(resp.data))
  } catch (e) {
    console.log(e);
  }
};

export const addPost = post => async dispatch => {
  try {
    await axiosForum.post('/posts', post);
    dispatch(push('/'));
  } catch (e) {
    dispatch(addPostFailure(e))
  }
};

export const fetchComments = id => async dispatch => {
  try {
    const resp = await axiosForum.get('/comments/'+id);
    dispatch(fetchCommentsSuccess(resp.data))
  } catch (e) {
    console.log(e);
  }
};

export const addcomment = comment => async dispatch => {
  try {
    await axiosForum.post('/comments', comment);
  } catch (e) {
    console.log(e);
  }
};