import React from 'react';
import PostIndexContainer from './post_index_container';


class UserHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return(
      <div className='user-home-page'>
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
        <PostIndexContainer />
      </div>
    );
  }


}
 export default UserHome;
