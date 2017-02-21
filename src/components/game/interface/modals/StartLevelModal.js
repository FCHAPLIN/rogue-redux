import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import {infoModalCloseAction} from 'actions/UIActions';
import {dispatch} from 'redux';

class StartLevelModal extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const infoModal = this.props.data.viewport.infoModal;

        return (
            <Modal
                isOpen={infoModal.isOpen}
                //onModalClose={this.infoModalClose}
                contentLabel="Example Modal"
                className={`ReactModal__${infoModal.type}`}
            >
                <h2 ref="subtitle">{infoModal.title}</h2>
                <div>{infoModal.content}</div>
                <div className="ReactModal__buttons-bar">
                    <button onClick={this.props.infoModalClose}>ok</button>
                </div>
            </Modal>
        );
    }
}

export default StartLevelModal;