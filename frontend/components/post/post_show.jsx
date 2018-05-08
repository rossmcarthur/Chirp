import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post
    };
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  render() {
    debugger
    return (
      <div className='post-show-container' >
        <Link to={`/users/${this.props.post.author.username}`}>
          <img className='post-image'src={this.props.post.image_url}></img>
        </Link>
        <ul className='post-show-content'>
          <div className='post-header'>
            <Link to={`/users/${this.props.post.author.username}`}>
              <li className='post-author'>@{this.props.post.author.username}</li>
            </Link>
            <span className='post-bullet'>&bull;</span>
            <li className='post-moment'>{moment(this.props.post.created_at).fromNow()}</li>
          </div>
          <li className='post-body'>{this.props.post.body}</li>
          <i id='comment' className="far fa-comment"></i>
          <i id='like' className="far fa-heart"></i>
        </ul>
      </div>
);
  }
}

export default PostShow;
