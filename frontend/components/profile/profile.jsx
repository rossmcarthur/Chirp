import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.username);
  }

  render() {
    return (
      <div>
        <p>hey!!!</p>
      </div>
    );
  }
}

export default Profile;
