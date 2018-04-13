import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const DashboardProfile = ({ currentUser }) => {
  return (
    <div className='dashboard-profile-container'>
      <img className='dashboard-user-image' src={currentUser.image_url} />
      <p className='dashboard-username'>@{currentUser.username}</p>
      <div className='dashboard-information'>
        <ul className='dashboard-chirps-list'>
          <li className='dashboard-chirps-title'>Chirps</li>
          <li className='dashboard-chirps-count'>{currentUser.posts.length}</li>
        </ul>
        <ul className='dashboard-following-list'>
          <li className='dashboard-following-title'>Following</li>
          <li className='dashboard-following-count'>{currentUser.following.length}</li>
        </ul>
        <ul className='dashboard-followers-list'>
          <li className='dashboard-followers-title'>Followers</li>
          <li className='dashboard-followers-count'>{currentUser.followers.length}</li>
        </ul>
      </div>
    </div>
  );

};

export default connect(mapStateToProps, null)(DashboardProfile);
