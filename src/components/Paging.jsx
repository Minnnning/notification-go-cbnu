import React, { useState } from "react";
import './Paging.css';
import Pagination from "react-js-pagination";
import ListPage from './ListPage'

const Paging = (props) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };
  console.log(props.list.length);
  return (
    <>
      <ListPage list = {props.list} number={page} />
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={props.list.length}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}/>
    </>
  );
};

export default Paging;