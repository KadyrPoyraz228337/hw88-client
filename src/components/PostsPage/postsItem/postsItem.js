import React from 'react';
import {Badge, ListGroupItem} from "reactstrap";
import {NavLink} from "react-router-dom";

const PostsItem = (
  {image, date, name, id, totalComments}
) => {
  return (
    <ListGroupItem className='d-flex' action tag={NavLink} to={'/'+id}>
      <div style={{width: '15%'}} className='mr-3'>
        <img src={'http://localhost:8000/uploads/' + image} alt="" className='img-thumbnail'/>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-start'>
        <h3 className='mb-3'>{name}</h3>
        <p className='text-muted'>{date}</p>
        <Badge pill>{totalComments ? totalComments : 0} comments</Badge>
      </div>
    </ListGroupItem>
  );
};

export default PostsItem;