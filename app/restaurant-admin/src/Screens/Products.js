import axios from "axios";
import SideNavbar from "../Components/Sidebar";
import ContainerFluid from "../Components/Container";
import TopNavbar from "../Components/Navbar";


function Products() {

const createNewItem = () => {
alert("created")  
}
  
  return (
    <div className="d-flex">
      <SideNavbar />
      <ContainerFluid>
        <TopNavbar
          href="/home"
          children="Products"
          onClick={createNewItem}
          action="Create"
        />
      </ContainerFluid>
    </div>
  );
}

export default Products;