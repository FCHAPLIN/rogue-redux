import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import { startModalToggleAction } from 'actions/UIActions';
import { dispatch } from 'redux';

class StartLevelModal extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    componentDidMount(){

        setTimeout(this.props.startModalClose,5000);
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
                <h2 className="{`ReactModal__${startModal.type}__title`}" ref="subtitle">{startModal.title}</h2>
                <div className="{`ReactModal__${startModal.type}__text`}">{startModal.content}</div>
                <div className="ReactModal__buttons-bar">
                    <button onClick={this.props.startModalClose}>ok</button>
                </div>
            </Modal>
        );
    }
}

export default StartLevelModal;