import React from 'react';
import PostIndexContainer from './post_index_container';
import Navbar from '../navbar/navbar';
import PostFormContainer from '../post/post_form_container';


class UserHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return(
      <div className='full-user-home-page'>
        <Navbar />
        <PostFormContainer />
        <div className='user-home-page'>
          <PostIndexContainer />
        </div>
      </div>
    );
  }


}
 export default UserHome;
