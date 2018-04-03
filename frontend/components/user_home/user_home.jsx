import React from 'react';
import PostIndexContainer from './post_index_container';
import Navbar from '../navbar/navbar';


class UserHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return(
      <div>
        <Navbar />
        <div className='user-home-page'>
          <PostIndexContainer />
        </div>
      </div>
    );
  }


}
 export default UserHome;
