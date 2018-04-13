import React from 'react';

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
    return (
    <div onClick={this.handleCloseModal} className="modal-window">
    <div onClick={this.stopPropagation} className="post-show-container">
      <p className='post-show-container'> </p>
    </div>
  </div>
);
  }
}

export default PostShow;
