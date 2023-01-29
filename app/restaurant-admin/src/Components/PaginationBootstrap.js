
import Pagination from 'react-bootstrap/Pagination';

function Paginate({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  let active = currentPage;
  let items = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    items.push( <Pagination.Item key={i} active={i === active} onClick={() => {setCurrentPage(i)}}>
      {i}
    </Pagination.Item>,);
  }

  return (
 
    
    <Pagination className='mt-2 d-flex justify-content-center'>
          <Pagination.First />
      <Pagination.Prev />
      {items}
      <Pagination.Next />
      <Pagination.Last />
      </Pagination>
  );
}

export default Paginate;
