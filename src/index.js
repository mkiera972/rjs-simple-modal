import React, { useEffect } from 'react';
import useModal from './components/utils/UseModal';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import styles from './styles.module.css';

const Modal = ({ show, close, title, children }) => {
  useEffect(() => {
    return window.addEventListener('keyup', (e) => {
        closeModalEvent(e);
      });
  });

    /**
   * Function used to close the modal when the Esc key is clicked
   * @param {event} e
   * @return {void}
   */
  const closeModalEvent = e => {
    if(e.key === 'Escape') {
      close();
    };
  };

  return ReactDOM.createPortal(
     show ?
      <div
        className={styles.modalContainer}
        onClick={() => close()}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <header className={styles.modal_header}>
            <h2 className={styles.modal_header_title}> {title} </h2>
            <button type="button" className={styles.close} data-dismiss="modal" onClick={() => close()} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </header>
          <main className={styles.modal_content}> {children} </main>
          <footer className={styles.modal_footer}>
            <button type="button" className={styles.modal_close} aria-label="Close" onClick={() => close()}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
      : null
     ,
    document.getElementById("modal")
  );
};


Modal.propTypes = {
  close: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export {useModal, Modal};
