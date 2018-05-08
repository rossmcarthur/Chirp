import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleCloseModal(e) {
    this.props.closeModal();
    this.setState({ body: '' });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state;
    this.props.createPost(post);
    this.setState( {
      body: ''
    });
    this.handleCloseModal();
  }

  render() {
    if (this.props.modal) {
      return (
        <div className='post-form-container'>
        <form onSubmit={this.handleSubmit} className="post-form-box">
          <div className='post-create-header'>
            <p className='post-create-header-text'>Compose new Chirp</p>
            <button onClick={this.handleCloseModal} className="post-create-close-icon">&times;</button>
          </div>
          <div className='post-body-section'>
            <img className='post-create-image' src={this.props.currentUser.image_url}/>
            <textarea
              type='text'
              className='post-create-body'
              value={this.state.body}
              placeholder="What's happening?"
              onChange={this.update('body')}
              />
            </div>
            <div className='post-submit-container'>
              <button className='post-submit' disabled={this.state.body === ''} onClick={this.handleSubmit}>Chirp</button>
            </div>
          </form>
          </div>
      );
    } else {
      return null;
    }
  }
}

export default PostForm;
