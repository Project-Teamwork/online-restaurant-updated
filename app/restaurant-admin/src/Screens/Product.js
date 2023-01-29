import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import SideNavbar from "../Components/Sidebar";
import TopNavbar from "../Components/Navbar";
import ContainerFluid from "../Components/Container";
import Loader from "../Components/Loader";

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
          action="Back to Products"
        />
        <div className="pizzaMain shadow-lg p-3 mb-5 bg-white rounded">
          {/* <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid" alt="pizza" />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select
            className="form-control"
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
          >
            {pizza.variants.map((variant, index) => {
              return (
                <option key={index} value={variant}>
                  {variant}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {quantityArray.map((x, i) => {
              return (
                <option key={i} value={x + 1}>
                  {x + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-2">
            Price : {pizza.prices[0][variant] * quantity} €{' '}
          </h1>
        </div>
        <div className="m-1 w-100">
          <button
            onClick={() => addToCart(pizza, pizza._id, +quantity, variant)}
            className="btn"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img className="modalImage img-fluid" src={pizza.image} alt="pizza" />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal> */}
        </div>
      </ContainerFluid>
    </div>
  );
}

export default Product;
