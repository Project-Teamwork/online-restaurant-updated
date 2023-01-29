import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function TopNavbar(props) {

 
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="white" className="shadow-lg rounded m-3">
        <Container>
          <Navbar.Brand href={props.href}>{props.children}</Navbar.Brand>
          <Button onClick={props.onClick} className="bg-success px-5 py-2">{props.action}</Button>{' '}
        </Container>
      </Navbar>
    </Container>
  );
}

export default TopNavbar;
