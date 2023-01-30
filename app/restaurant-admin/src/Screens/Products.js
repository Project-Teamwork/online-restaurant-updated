import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";
import SideNavbar from "../Components/Sidebar";
import ContainerFluid from "../Components/Container";
import TopNavbar from "../Components/Navbar";
import Loader from "../Components/Loader.js";
import ProductCard from "../Components/Card";
import DeleteConfirm from "../Components/DeleteConfirm";
import Paginate from "../Components/PaginationBootstrap";
import ViewPizzaModal from "../Components/Pizza";
import { Modal } from "react-bootstrap";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Alert Variables
  const [show, setShow] = useState(false);
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Modal Variables
  const [modalShow, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  // Pagination variables
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

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

  // Functions used in current Screen
  const createNewItem = () => {
    console.table(data);
    navigate("/create");
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

  // Display current Screen
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
          onClose={handleClose}
          name={productName}
          button1="Cancel"
          onClick1={handleClose}
          button2="Delete"
          onClick2={() => deleteItem()}
        />
        <ContainerFluid>
          <p className="text-start ps-4 mt-2 mb-4 fs-3 overflow-auto">
            Total pizzas: {data.length}
          </p>
          {currentPosts.map((pizza, index) => {
            return (
              <div>
                <ProductCard
                  onClick={handleModalShow}
                  key={index}
                  src={pizza.image}
                  title={pizza.name}
                  description={pizza.description}
                  button1="View"
                  button2="Edit"
                  button3="Delete"
                  onClick3={(id) => showAlert(pizza._id, pizza.name)}
                />
                <ViewPizzaModal
                  modalShow={modalShow}
                  handleModalClose={handleModalClose}
                  pizza={pizza}
                />
              </div>
            );
          })}
        </ContainerFluid>
        <Paginate
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </ContainerFluid>
    </div>
  );
}

export default Products;
