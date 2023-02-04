import React from "react";
import { Modal } from "react-bootstrap";

function ViewPizzaModal({ pizza, modalShow, handleModalClose }) {
  return (
    <Modal show={modalShow} onHide={handleModalClose} className="modal-lg">
      <Modal.Header closeButton>
        <Modal.Title>Product Name {pizza.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex align-items-center">
       <img className="img-fluid" src={pizza.image} alt="pizza" />

        <div>
          <p><span>Product Id:</span> {pizza._id}</p>
          <p><span>Category:</span> {pizza.category}</p>
          <p><span>Description:</span> {pizza.description}</p>
          <p><span>Variants:</span> {pizza.variants.map((variant) => {return(<li className="d-inline-block" key={String(variant)}> {variant} | </li>)})}</p>
          <p><span>Prices:</span> {pizza.prices.map((price) => {
            return (
            <ul>
              <li>small: {price.small}</li>
              <li>medium: {price.medium}</li>
              <li>large: {price.large}</li>
            </ul>
            )}) }</p>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <button className="btn btn-primary" onClick={handleModalClose}>
          CLOSE
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewPizzaModal;
