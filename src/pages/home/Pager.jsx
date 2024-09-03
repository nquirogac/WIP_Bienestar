import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

function Pager({ totalItems, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 10;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxVisiblePages) {
      const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
      if (currentPage <= halfMaxVisiblePages) {
        endPage = maxVisiblePages;
      } else if (currentPage + halfMaxVisiblePages >= totalPages) {
        startPage = totalPages - maxVisiblePages + 1;
      } else {
        startPage = currentPage - halfMaxVisiblePages;
        endPage = currentPage + halfMaxVisiblePages;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return pageNumbers;
  };

  return (
    <Pagination>
      <Pagination.First
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      />
      <Pagination.Prev
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {renderPageNumbers()}
      <Pagination.Next
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
      <Pagination.Last
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
}

export default Pager;