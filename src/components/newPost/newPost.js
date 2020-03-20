import React, {useState} from 'react';
import {Alert, Button, Form} from "reactstrap";
import FormField from "../UI/formField/formField";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../store/actions/users";
import {addPost} from "../../store/actions/posts";

const NewPost = () => {
  const initialState = {
    title: '',
    description: '',
    image: null
  };

  const [postInfo, setPost] = useState(initialState);
  const error = useSelector(state => state.posts.error);
  const dispatch = useDispatch();

  const inputChangeHandler = e => setPost({...postInfo, [e.target.name]: e.target.value});
  const fileChangeHandler = e => setPost({...postInfo, [e.target.name]: e.target.files[0]});
  const onSubmit = async e => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(postInfo).forEach(field => {
      data.append(field, postInfo[field])
    });

    dispatch(addPost(data))
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormField
          type='text'
          title='Title'
          name='title'
          placeholder='enter post title'
          onChange={inputChangeHandler}
          required
        />
        <FormField
          type='textarea'
          title='Description'
          name='description'
          placeholder='enter post description'
          onChange={inputChangeHandler}
        />
        <FormField
          type='file'
          title='Image'
          name='image'
          onChange={fileChangeHandler}
        />
        {error && <Alert color='danger'>
          {error}
        </Alert>}
        <Button>Add post</Button>
      </Form>
    </div>
  );
};

export default NewPost;