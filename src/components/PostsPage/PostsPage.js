import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/actions/posts";
import {ListGroup} from "reactstrap";
import PostsItem from "./postsItem/postsItem";

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);
  return posts && (
    <div>
      <ListGroup>
        {posts.map(post => (
          <PostsItem
            key={post._id}
            id={post._id}
            image={post.image}
            name={post.user.username}
            date={post.datetime}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default PostsPage;