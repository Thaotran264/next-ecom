import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { DataContext } from "../store/globalState";

const ModalComponent = () => {
  const { state, dispatch, showModal, setShowModal } = useContext(DataContext);
  const { modal } = state;

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = () => {};

  return (
    <Modal show={showModal} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title>{modal.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to delete this item?</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleSubmit}>
          Yes
        </Button>
        <Button variant='primary' onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
