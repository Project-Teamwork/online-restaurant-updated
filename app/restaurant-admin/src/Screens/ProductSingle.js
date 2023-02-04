import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import SideNavbar from "../Components/Sidebar";
import TopNavbar from "../Components/Navbar";
import ContainerFluid from "../Components/Container";
import Loader from "../Components/Loader";
import BasicForm from "../Components/Form";

function Product({ pizza }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // const [variant, setVariant] = useState('small');
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const showProducts = async () => {
    setLoading(true);
    await navigate("/home");
  };

  return (
    <div className="d-flex">
      <SideNavbar />
      <ContainerFluid>
        <TopNavbar
          href="/home"
          children="Products"
          onClick={showProducts}
          action="All Products"
        />
    
         <BasicForm/>
      </ContainerFluid>
    </div>
  );
}

export default Product;
