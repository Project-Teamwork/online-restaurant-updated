import axios from "axios";
import { useState, useEffect } from "react";
import SideNavbar from "../Components/Sidebar";
import ContainerFluid from "../Components/Container";
import TopNavbar from "../Components/Navbar";
import Loader from "../Components/Loader.js";
import ProductCard from "../Components/Card";
import DeleteConfirm from "../Components/DeleteConfirm";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getAllPizzas = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/pizzas/all");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getAllPizzas();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const createNewItem = () => {
    console.table(data);
    alert("created");
  };

  const deleteItem = () => {
    try {
      let id = productId;
      axios.delete("http://localhost:5000/api/pizzas/" + id);
      window.location.reload(true);
    } catch (error) {
      console.error(error);
    }
  };

  const showAlert = (id, name) => {
    setProductId(id);
    setProductName(name);
    handleShow();
  };

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
        <DeleteConfirm
          showAlert={show}
          name={productName}
          button1="Cancel"
          onClick1={handleClose}
          button2="Delete"
          onClick2={() => deleteItem()}
        />
        <ContainerFluid>
          <p className="text-start ps-4 mt-2 mb-4 display-6">
            Total pizzas: {data.length}
          </p>
          {data.map((pizza, index) => {
            return (
              <div>
                <ProductCard
                  key={index}
                  src={pizza.image}
                  title={pizza.name}
                  description={pizza.description}
                  button1="View more"
                  button2="Update"
                  button3="Delete"
                  onClick3={(id) => showAlert(pizza._id, pizza.name)}
                />
              </div>
            );
          })}
        </ContainerFluid>
      </ContainerFluid>
    </div>
  );
}

export default Products;
