import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import './table.css';
import { getDataWithinIndexRange, getSortedData } from "../../Utils/rows";
import { Rows } from "../row";
import { Column } from "../column";

const Table = ({ header = {}, options = {}, colDef = [], rowData = [] } = {}) => {
  const pageOptions = options.paginationOptions || {};
  const [activePage, setActivePage] = useState(1);
  const [showPagination, setShowPagination] = useState(pageOptions.defaultPaginationEnabled)
  const [rows, setRows] = useState([]);
  const [sortBy, setSortBy] = useState({
    sortBy: options.sortBy,
    sortingOrder: options.sortingOrder || "ASC"
  });


  const getNext = (rowData, pageId) => {
    const sortedData = getSortedData(colDef, rowData, sortBy);
    const nextData = getDataWithinIndexRange(
      (pageId - 1) * paginationOptions.itemsPerPage,
      pageId * paginationOptions.itemsPerPage,
      sortedData
    );
    setRows(nextData);
  };

  const getPrevious = (rowData, pageId) => {
    const sortedData = getSortedData(colDef, rowData, sortBy);
    const nextData = getDataWithinIndexRange(
      (pageId - 1) * paginationOptions.itemsPerPage,
      pageId * paginationOptions.itemsPerPage,
      sortedData
    );
    setRows(nextData);
  };

  const paginationOptions = {
    itemsPerPage: pageOptions.itemsPerPage || 10,
    pageRangeDisplayed: pageOptions.pageRangeDisplayed || 4,
    getNext: pageOptions.getNext || getNext,
    getPrevious: pageOptions.getPrevious || getPrevious,
    pageId: pageOptions.pageId || 1,
    defaultPaginationEnabled: pageOptions.defaultPaginationEnabled,
  };

  const changePageWithData = (pageId) => {
    if (activePage === pageId) {
      const sortedData = getSortedData(colDef, rowData, sortBy);
      const nextData = getDataWithinIndexRange(
        (pageId - 1) * paginationOptions.itemsPerPage,
        pageId * paginationOptions.itemsPerPage,
        sortedData
      );
      setRows(nextData.slice(0, pageOptions.itemsPerPage))
    } else if (activePage < pageId) {
      paginationOptions.getNext(rowData, pageId);
    } else if (activePage > pageId) {
      paginationOptions.getPrevious(rowData, pageId);
    }
    setActivePage(pageId);
  };

  useEffect(() => {
    setShowPagination(rowData.length > paginationOptions.itemsPerPage);
    changePageWithData(paginationOptions.pageId)
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
