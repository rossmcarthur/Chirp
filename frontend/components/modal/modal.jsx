import React from 'react';

class Modal extends React.Component {
  stopPropagation(e) {
    e.stopPropagation();
  }

  render() {
  if (this.props.component) {
    return(
      <div className='modal-window' onClick={this.props.closeModal}>
        <div onClick={this.stopPropagation} className="modal-conatiner">
          {this.props.component}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
}

export default Modal;
