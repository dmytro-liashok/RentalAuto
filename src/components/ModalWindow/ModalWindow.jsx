import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./ModalWindow.module.css";
import { IoCloseOutline } from "react-icons/io5";

const modalRoot = document.getElementById("modal-root");

const ModalWindow = ({ handleModalToggle, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        handleModalToggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleModalToggle]);

  const handleCloseModalBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleModalToggle();
    }
  };

  return createPortal(
    <>
      <div className={css.backdrop} onClick={handleCloseModalBackdropClick}>
        <div className={css.modalContent}>
          <IoCloseOutline
            className={css.iconClose}
            onClick={handleModalToggle}
          />
          {children}
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default ModalWindow;
