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
                className="ReactModal__fullbrick"
            >
                <h2 className="ReactModal__fullbrick__title"
					ref="subtitle">Level {this.props.level}
				</h2>
                <div className={`ReactModal__fullbrick__text`}>{startModal.content}</div>
            </Modal>
        );
    }
}

export default StartLevelModal;