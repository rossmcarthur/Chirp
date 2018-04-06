import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      body: '',
    };
  }

  update(field) {
    
  }
}

export default PostForm;
