import Pagination from "react-bootstrap/Pagination";

function Paginate({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  let active = currentPage;
  let items = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === active}
        onClick={() => {
          setCurrentPage(i);
        }}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="mt-2 d-flex justify-content-center">
      <Pagination.First
        onClick={() => {
          setCurrentPage(1);
        }}
      />
      <Pagination.Prev
        onClick={() => {
          currentPage >= 2
            ? setCurrentPage(currentPage - 1)
            : setCurrentPage(currentPage);
        }}
      />
      {items}
      <Pagination.Next
        onClick={() => {
          currentPage < Math.ceil(totalPosts / postsPerPage)
            ? setCurrentPage(currentPage + 1)
            : setCurrentPage(currentPage);
        }}
      />
      <Pagination.Last
        onClick={() => {
          setCurrentPage(Math.ceil(totalPosts / postsPerPage));
        }}
      />
    </Pagination>
  );
}

export default Paginate;
