import React from 'react';
import { Alert, Button } from "react-bootstrap";

function DeleteConfirm(props) {

  return (
    <>
      <Alert show={props.showAlert} onHide={props.handleClose} variant="danger">
        <Alert.Heading>Please confirm</Alert.Heading>
        <p>
         Are you sure you want to delete {props.name}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={props.onClick1} variant="outline-danger">
            {props.button1}
          </Button>
          <Button onClick={props.onClick2} variant="danger">
            {props.button2}
          </Button>
        </div>
      </Alert>

    
    </>
  );
}

export default DeleteConfirm;