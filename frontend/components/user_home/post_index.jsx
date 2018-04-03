import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  render() {
    const posts = this.props.posts.map(post => {
      return (
        <PostIndexItem
          key={post.id}
          post={post}
          />
      );
    });
    return (
      <div className='post-list-index'>
        { posts }
      </div>

    );
  }
}

export default PostIndex;
