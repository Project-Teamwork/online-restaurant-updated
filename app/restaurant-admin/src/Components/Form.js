import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function BasicForm() {
  return (
    <Form className="w-75 ms-5 mt-5">
      <h1>Create Product</h1>
      <Form.Group className="mb-1" controlId="formBasicName">
        <FloatingLabel
          controlId="floatingInput"
          label="Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Enter product name" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicDescription">
        <FloatingLabel
          controlId="floatingInput"
          label="Description"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Enter product's description" />
        </FloatingLabel>
      </Form.Group>
      
      <Form.Select aria-label="Select product category" size="sm"> 
      <option>Product category</option>
      <option value="vegan">Vegan</option>
      <option value="novegan">Not Vegan</option>
      <option value="">New category</option>
    </Form.Select>
    
    <Form.Group className="mb-5 mt-3" controlId="formBasicVariants">
    {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="">
          <Form.Check
            inline
            label="small"
            name="small"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="medium"
            name="medium"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="large"
            name="large"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}

      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}

export default BasicForm;
