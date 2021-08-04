import React from "react";
import ReactDom from "react-dom";

const Modal = ({ setOpen }) => {

    function closeModal() {
        setOpen(false)
    }

    return ReactDom.createPortal(
        <>
            <div className="overlayStyles"></div>
            <div className="modalContainer">
                <div className="disclaimer">
                    <h4>Please select an option from the given options.</h4>
                </div>
                <div className="closeBtn">
                    <button type="button" onClick={closeModal}>X</button>
                </div>
            </div>
        </>
        , document.getElementById("portal")
    )
}

export default Modal;

