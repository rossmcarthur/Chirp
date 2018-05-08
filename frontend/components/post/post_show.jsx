import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followerIDs: this.props.post.author.followers.map( follower => follower.id)
    };
  }

  followButton() {
    if (this.props.post.author.id === this.props.currentUser.id) {
      return (
        <div></div>
      );
    } else if (this.state.followerIDs.includes(this.props.currentUser.id)) {
      return (
        <button className='post-show-following'>Following</button>
      );
    } else {
      return (
        <button className='post-show-follow'>Follow</button>
      );
    }
  }

  render() {
    return (
      <div className='post-show-container'>
        <div className='post-show-content'>
          <div className='post-show-header'>
            <div className='post-show-user'>
              <Link to={`/users/${this.props.post.author.username}`}>
                <img className='post-show-user-image'src={this.props.post.image_url}></img>
              </Link>
              <Link to={`/users/${this.props.post.author.username}`}>
                <li className='post-show-author'>@{this.props.post.author.username}</li>
              </Link>
            </div>
            {this.followButton()}
          </div>
          <ul className='post-show-text'>
            <li className='post-show-body'>{this.props.post.body}</li>
            <li className='post-show-date'>{moment(this.props.post.created_at).format('LT')} - {moment(this.props.post.created_at).format('D MMM YYYY')}</li>
            <i id='show-comment' className="far fa-comment"></i>
            <i id='show-like' className="far fa-heart"></i>
          </ul>
        </div>
      </div>
);
  }
}

export default PostShow;
