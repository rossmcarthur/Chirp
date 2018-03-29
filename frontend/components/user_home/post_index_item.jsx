import React from 'react';
import { Link } from 'react-router-dom';
import PostIndex from './post_index';


const PostIndexItem = ({ post }) => {
  debugger
  return (
    <div className='post-index-item'>
      <ul>
        <li className='post-author'>{post.author.email}</li>
        <li className='post-body'>{post.body}</li>
      </ul>
    </div>
  )
}

export default PostIndexItem;
