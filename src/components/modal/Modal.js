import React, { useEffect } from "react";
import style from "./Modal.module.css";

const Modal = ({ children, openModal, toggleModal }) => {

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.className = openModal ? style.open1 : style.close1;
    //  document.body.style.overflow=openModal?"hidden":"visible";
  }, [openModal]);

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };
  const handleClick = (e) => {
    if (e.target.dataset.name !== "overlay") {
      return;
    }
    toggleModal();
  };

  return (
    <>
      {openModal && (
        <div
          className={style.overlay}
          onClick={handleClick}
          data-name="overlay"
        >
          <div className={style.modal} data-name="modal">
            <button
              className={style.closeButton}
              type="button"
              onClick={toggleModal}
            ></button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
