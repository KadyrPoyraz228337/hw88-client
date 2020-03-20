import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addcomment, fetchComments, fetchPost} from "../../store/actions/posts";
import {useParams} from "react-router";
import {Button, Form, Input, ListGroup, ListGroupItem} from "reactstrap";
import {push} from 'connected-react-router';

const Post = () => {
  const post = useSelector(state => state.post.post);
  const comments = useSelector(state => state.post.comments);
  const user = useSelector(state => state.users.user);

  const dispatch = useDispatch();
  const params = useParams();

  const [comment, setComment] = useState({text: '', id: params.id});

  const inputChangeHandler = e => setComment({...comment, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();
    dispatch(addcomment(comment));
    dispatch(push('/'+params.id))
  };

  useEffect(() => {
    dispatch(fetchComments(params.id));
    dispatch(fetchPost(params.id))
  }, [dispatch, params]);
  return post && (
    <div>
      <div className='d-flex mb-5'>
        {post.image !== 'textPost.png' && <img
          src={'http://localhost:8000/uploads/'+post.image} alt=""
          className='border w-25 mr-4'
          style={{borderRadius: '30px'}}
        />}
        <div className='d-flex w-100'>
          <div>
            <h1>{post.title}</h1>
            <p className='text-muted'>{post.description}</p>
          </div>
          <p className='font-weight-bold text-muted ml-auto'>{post.datetime}</p>
        </div>
      </div>
      <div>
        {user && <div className='w-75'>
          <Form className='w-75' onSubmit={onSubmit}>
            <Input
              className='mb-3'
              type='textarea'
              placeholder='enter comment text'
              name='text'
              onChange={inputChangeHandler}
              required
            />
            <Button>Add comment</Button>
          </Form>
        </div>}
        <h3>Comments:</h3>
        {comments && <div>
          <ListGroup>
            {comments.map(comment => (
              <ListGroupItem className='d-flex w-75' key={comment._id}>
                <b className='mr-3'>{comment.user.username}</b>
                <p className='m-0'>{comment.text}</p>
                <p className='text-muted ml-auto m-0'>{comment.datetime}</p>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>}
      </div>
    </div>
  );
};

export default Post;