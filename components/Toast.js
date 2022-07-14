import React, { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

const ToastComponent = ({ msg, handleShow, bgColor }) => {
  return (
    <ToastContainer position='bottom-end' className='p-3'>
      <Toast
        autohide={true}
        onClose={handleShow}
        className={`text-light ${bgColor}`}
      >
        <Toast.Header className='d-flex justify-content-between'>
          <strong>{msg.title}</strong>
        </Toast.Header>
        <Toast.Body>{msg.msg}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastComponent;
