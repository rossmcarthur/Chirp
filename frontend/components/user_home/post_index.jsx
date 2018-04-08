import React from 'react';
import PostIndexItem from './post_index_item';
import onClickOutside from "react-onclickoutside";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortcut: false,
      body: '',
      author_id: this.props.currentUser.id
    };
    this.toggleShortcut = this.toggleShortcut.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside() {
    return (
      this.state.shortcut ? this.toggleShortcut(): null
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state;
    this.props.createPost(post);
    this.setState( {
      body: ''
    });
  }

  toggleShortcut() {
    return (
      this.state.shortcut ? this.setState({ shortcut: false }) : this.setState({ shortcut: true })
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  showShortcut() {
    if (this.state.shortcut) {
      return (
          <form onSubmit={this.handleSubmit} className="post-form-box-shortcut">
            <div className='post-body-section-shortcut'>
              <img className='post-create-image' src={this.props.currentUser.image_url}/>
              <textarea
                type='text'
                className='post-create-body-shortcut'
                value={this.state.body}
                placeholder="What's happening?"
                onChange={this.update('body')}
                autoFocus={true}
                />
              </div>
              <div className='post-submit-container'>
                <button className='post-submit' disabled={this.state.body === ''} onClick={this.handleSubmit}>Chirp</button>
              </div>
            </form>
      );
    } else {
        return (
          <div className='post-shortcut-container'>
            <img src={this.props.currentUser.image_url} className='post-shortcut-image'></img>
            <input onClick={this.toggleShortcut} className='post-shortcut-activate' placeholder="What's happening?"/>
          </div>
        );
      }
  }

  render() {
    const postList = this.props.posts;
    const posts = [...postList].reverse().map(post => {
      return (
        <PostIndexItem
          key={post.id}
          post={post}
          />
      );
    });
    return (
      <div className='post-list-index'>
        {this.showShortcut()}
        { posts }
      </div>

    );
  }
}

export default onClickOutside(PostIndex);
