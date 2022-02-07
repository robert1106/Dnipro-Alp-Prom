import React, {Component} from "react";

import './modal.css'

export default class Modal extends Component {

    state = {
        showModalBg: "close-modal-bg",
        showModalWin: "close-modal-win",
    }

    componentDidMount() {
        this.setState(() => {
            return {showModalBg: "open-modal-bg", showModalWin: "open-modal-win"};
        });
    }

    closeModal = () => {
        this.setState(() => {
            return {showModalBg: "close-modal-bg", showModalWin: "close-modal-win"};
        });
    }

    render() {
        const closeModal = this.props.setShowModal;
        const content = this.props.content;
        return (
            <>
                <div className="modal">
                    <div className={"modal-bg "+this.state.showModalBg} onClick={() => {
                        this.closeModal();
                        setTimeout(() => closeModal(false), 300);
                    }}/>
                    <div className={"modal-window " + this.state.showModalWin}>
                        <button className="modal-close-btn" onClick={() => {
                            this.closeModal();
                            setTimeout(() => closeModal(false), 300);
                        }}>&#10006;</button>
                        {content}
                    </div>
                </div>
            </>
        )
    }
}