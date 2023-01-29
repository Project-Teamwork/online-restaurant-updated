import React from "react";
import { Alert, Button } from "react-bootstrap";

function DeleteConfirm(props) {
  return (
    <Alert
      show={props.showAlert}
      onHide={props.handleClose}
      variant="danger"
      className="shadow-lg"
      style={{
        width: "40vw",
        margin: "auto",
        position: "fixed",
        right: "25vw",
        zIndex: "1",
        border: "3vw solid white",
        color: "black",
      }}
    >
      <Alert.Heading>Please confirm</Alert.Heading>
      <p>Are you sure you want to delete "{props.name}" item?</p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button
          onClick={props.onClick1}
          variant="outline-dark"
          className="me-3 px-4"
        >
          {props.button1}
        </Button>
        <Button onClick={props.onClick2} variant="danger" className="me-3 px-4">
          {props.button2}
        </Button>
      </div>
    </Alert>
  );
}

export default DeleteConfirm;
