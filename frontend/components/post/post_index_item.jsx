import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostShowContainer from './post_show_container';
import { closeModal, showModal } from '../../actions/ui_actions';
import moment from 'moment';

const mapStateToProps = state => {
  return {
    modal: Boolean(state.ui.modals.component)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showModal: component => dispatch(showModal(component)),
    closeModal: () => dispatch(closeModal())
  };
};

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowModal = this.handleShowModal.bind(this);
  }

  handleShowModal() {
    this.props.showModal(<PostShowContainer post={ this.props.post }/>);
  }

  render() {
    return (
      <div id={this.props.post.id} className='post-index-item' onClick={this.handleShowModal}>
        <Link to={`/users/${this.props.post.author.username}`}>
          <img className='post-image'src={this.props.post.image_url}></img>
        </Link>
        <ul className='post-content'>
          <div className='post-header'>
            <Link to={`/users/${this.props.post.author.username}`}>
              <li className='post-author'>@{this.props.post.author.username}</li>
            </Link>
            <span className='post-bullet'>&bull;</span>
            <li className='post-moment'>{moment(this.props.post.created_at).fromNow()}</li>
          </div>
          <li className='post-body'>{this.props.post.body}</li>
          <i id='comment' className="far fa-comment"></i>
          <i id='like' className="far fa-heart"></i>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);
