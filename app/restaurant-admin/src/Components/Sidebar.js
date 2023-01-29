import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function SideNavbar(props) {
  return (
    // <div className="w-25">
      <Nav
        defaultActiveKey="/home"
       fill variant="pills"
        className="flex-column shadow-lg p-3 mb-5 bg-white rounded w-25 "
      >
        <Link className="navbar-brand" to="/">
          ONLINE-PIZZA <br></br>Admin Dashboard
        </Link>
        <div className="mt-5 fs-5">
          <Nav.Link href="/home">Products</Nav.Link>
          <Nav.Link eventKey="link-1" >Orders</Nav.Link>
          <Nav.Link eventKey="link-2" >Users</Nav.Link>
          <Nav.Link eventKey="link-3" disabled>Profile</Nav.Link>
      
        </div>
      </Nav>
    // </div>
  );
}

export default SideNavbar;