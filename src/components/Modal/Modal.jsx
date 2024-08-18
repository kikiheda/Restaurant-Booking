import React from "react";
import "./Modal.scss";

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        {children}
        <button onClick={onClose} className="modal__close">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
