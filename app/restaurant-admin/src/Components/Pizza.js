import React from 'react';
import { Modal } from 'react-bootstrap';

function ViewPizzaModal({ pizza, modalShow, handleModalClose }) {

  return (

  
    <Modal show={modalShow} onHide={handleModalClose}>
    <Modal.Header closeButton>
      <Modal.Title>{pizza.name}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <img className="modalImage img-fluid" src={pizza.image} alt="pizza" />
      <p>{pizza.description}</p>
    </Modal.Body>

    <Modal.Footer>
      <button className="btn" onClick={handleModalClose}>
        CLOSE
      </button>
    </Modal.Footer>
  </Modal>
      
     
  );
}

export default ViewPizzaModal;
