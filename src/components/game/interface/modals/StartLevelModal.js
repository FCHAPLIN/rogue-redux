import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import { startModalToggleAction } from 'actions/UIActions';
import { dispatch } from 'redux';

class StartLevelModal extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const startModal = this.props.data.modals.startModal;

        return (
            <Modal
                isOpen={startModal.isOpen}
                //onModalClose={this.infoModalClose}
                contentLabel="Example Modal"
                className={`ReactModal__${startModal.type}`}
            >
                <h2 ref="subtitle">{startModal.title}</h2>
                <div>{startModal.content}</div>
                <div className="ReactModal__buttons-bar">
                    <button onClick={this.props.startModalClose}>ok</button>
                </div>
            </Modal>
        );
    }
}

export default StartLevelModal;