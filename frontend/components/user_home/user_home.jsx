import React from 'react';
import PostIndexContainer from '../post/post_index_container';
import Navbar from '../navbar/navbar';
import PostFormContainer from '../post/post_form_container';
import DashboardProfile from './dashboard_profile';
import Modal from '../modal/modal_container';


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
        <div className='user-home-page'>
          <div className='first-grid-container'>
            <DashboardProfile />
          </div>
          <PostIndexContainer />
        </div>
      </div>
    );
  }


}
 export default UserHome;
