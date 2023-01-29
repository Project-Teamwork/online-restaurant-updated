import Button from 'react-bootstrap/Button';

function Paginations({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      {pages.map((page, index) => {
        return (
          <Button 
            key={index}
            onClick={() => {
              setCurrentPage(page);
            }}
            variant="primary"
            className={ page===currentPage ? "active" : " "}
          >
            {page}
          </Button>
        );
      })}
    </>
  );
}

export default Paginations;
