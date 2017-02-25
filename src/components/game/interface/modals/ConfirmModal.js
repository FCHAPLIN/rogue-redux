import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import { confirmModalCancelAction } from 'actions/UIActions';
import { confirmModalConfirmAction } from 'actions/UIActions';
import { dispatch } from 'redux';

class ConfirmModal extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const confirmModal = this.props.data.modals.confirmModal;
        return (
            <Modal
                isOpen={confirmModal.isOpen}
                confirmModalCancel={this.confirmModalCancel}
                confirmModalValid={this.confirmModalValid}
                contentLabel="Example Modal"
                className="ReactModal__confirm"
            >
                <h2 ref="subtitle">{confirmModal.question}</h2>
                <div>{confirmModal.content}</div>
                <div className="ReactModal__buttons-bar">
                    <button onClick={this.props.confirmModalConfirm}>Confirm</button>
                    <button onClick={this.props.confirmModalCancel}>Cancel</button>
                </div>
            </Modal>
        );
    }
}

export default ConfirmModal;