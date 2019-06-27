import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import './table.css';
import { getDataWithinIndexRange, getSortedData } from "../../Utils/rows";
import { Rows } from "../row";
import { Column } from "../column";

const Table = ({ header = {}, options = {}, colDef = [], rowData = [] } = {}) => {
  const [activePage, setActivePage] = useState(1);
  const [showPagination, setShowPagination] = useState(false)
  const [rows, setRows] = useState([]);
  const [sortBy, setSortBy] = useState({
    sortBy: options.sortBy,
    sortingOrder: options.sortingOrder || "ASC"
  });

  const pageOptions = options.paginationOptions || {};

  const getNext = (rowData, pageId) => {
    return {
      nextPage: true,
      data: getDataWithinIndexRange(
        (pageId - 1) * paginationOptions.itemsPerPage,
        pageId * paginationOptions.itemsPerPage,
        rowData
      )
    }
  };

  const getPrevious = (rowData, pageId) => {
    return {
      nextPage: true,
      data: getDataWithinIndexRange(
        (pageId - 1) * paginationOptions.itemsPerPage,
        pageId * paginationOptions.itemsPerPage,
        rowData
      ),
    }
  };

  const paginationOptions = {
    itemsPerPage: pageOptions.itemsPerPage || 10,
    pageRangeDisplayed: pageOptions.pageRangeDisplayed || 4,
    getNext: pageOptions.getNext || getNext,
    getPrevious: pageOptions.getPrevious || getPrevious
  };

  const changePageWithData = (pageId) => {
    const sortedData = getSortedData(colDef, rowData, sortBy);
    let nextDataToShow = {};
    if (activePage === pageId) {
      nextDataToShow = {
        nextPage: false,
        data: getDataWithinIndexRange(
          (pageId - 1) * paginationOptions.itemsPerPage,
          pageId * paginationOptions.itemsPerPage,
          rowData
        )
      }
    } else if (activePage < pageId) {
      nextDataToShow = paginationOptions.getNext(sortedData, pageId)
    } else if (activePage > pageId) {
      nextDataToShow = paginationOptions.getPrevious(sortedData, pageId)
    }

    setRows(nextDataToShow.data.slice(0, pageOptions.itemsPerPage))
    setActivePage(pageId);
  };

  useEffect(() => {

    setShowPagination(rowData.length > paginationOptions.itemsPerPage);
    changePageWithData(1)
  }, [sortBy, rowData, header])


  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <Column
            colDef={colDef}
            options={options}
            sort={setSortBy}
          />
        </thead>
        <tbody>
          <Rows
            colDef={colDef}
            rowData={rows}
            headerOptions={header.options}
          />
        </tbody>
      </table>
      {showPagination && (
        <Pagination
          activePage={activePage}
          itemsCountPerPage={paginationOptions.itemsPerPage}
          pageRangeDisplayed={paginationOptions.pageRangeDisplayed}
          totalItemsCount={rowData.length}
          onChange={changePageWithData}
          itemClass="page-item"
          linkClass="page-link"
        />
      )}
    </div>
  );
};

export { Table };
