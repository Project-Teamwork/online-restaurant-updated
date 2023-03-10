import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard(props) {
  return (
    <Card
      style={{ width: "60vw" }}
      className="flex-row align-items-center justify-content-around my-3 mx-auto shadow"
      onClick={props.onClick}
    >
      <div>
        <Card.Img style={{ width: "10vw", margin: "1rem" }} src={props.src} />
      </div>
      <Card.Body className="text-start">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button onClick={props.onClick1} variant="btn btn-outline-primary text-primary me-2" className="outlined">
          {props.button1}
        </Button>
        <Button onClick={props.onClick2} variant="btn btn-outline-success text-success me-2" className="outlined">
          {props.button2}
        </Button>
        <Button onClick={props.onClick3} variant="btn btn-outline-danger text-danger me-2" className="outlined">
          {props.button3}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
