import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  state = {
    url: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.modalClose();
    }
  };

  handleOverlay = e => {
    if (e.target === e.currentTarget) {
      this.props.modalClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleOverlay}>
        <div className="Modal">
          <img src={this.props.modalPicture} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
