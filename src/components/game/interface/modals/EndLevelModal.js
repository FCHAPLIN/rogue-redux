import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import { endModalToggleAction } from 'actions/UIActions';
import { dispatch } from 'redux';

class EndLevelModal extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const endModal = this.props.data.modals.endModal;

        return (
            <Modal
                isOpen={endModal.isOpen}
                //onModalClose={this.infoModalClose}
                contentLabel="Example Modal"
                className={`ReactModal__${endModal.type}`}
            >
                <h2 ref="subtitle">{endModal.title}</h2>
                <div>{endModal.content}</div>
                <div className="ReactModal__buttons-bar">
                    <button onClick={this.props.endModalClose}>ok</button>
                </div>
            </Modal>
        );
    }
}

export default EndLevelModal;
