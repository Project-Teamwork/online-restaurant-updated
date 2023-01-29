import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function SideNavbar() {
  return (
    <div className="w-25">
      <Nav
        defaultActiveKey="/home"
        className="flex-column shadow-lg  vh-100 p-3 mb-5 bg-white rounded"
      >
        <Link className="navbar-brand" to="/">
          ONLINE-PIZZA <br></br>Admin Dashboard
        </Link>
        <div className="mt-3">
          <Nav.Link href="/home">Products</Nav.Link>
          <Nav.Link eventKey="link-1">Orders</Nav.Link>
          <Nav.Link eventKey="link-2">Users</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </div>
      </Nav>
    </div>
  );
}

export default SideNavbar;