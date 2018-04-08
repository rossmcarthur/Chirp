import React from 'react';
import { Link } from 'react-router-dom';
import PostIndex from './post_index';
import moment from 'moment';


const PostIndexItem = ({ post }) => {
  return (
    <div className='post-index-item'>
      <img className='post-image'src={post.image_url}></img>
      <ul className='post-content'>
        <div className='post-header'>
          <li className='post-author'>@{post.author.username}</li>
          <span className='post-bullet'>&bull;</span>
          <li className='post-moment'>{moment(post.created_at).fromNow()}</li>
        </div>
        <li className='post-body'>{post.body}</li>
        <i id='comment' className="far fa-comment"></i>
        <i id='like' className="far fa-heart"></i>
      </ul>
    </div>
  )
}

export default PostIndexItem;
