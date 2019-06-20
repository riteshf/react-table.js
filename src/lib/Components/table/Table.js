import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import './table.css';
import { getDataWithinIndexRange, getSortedData } from "../../Utils/rows";
import { Row as RowData } from "../row";
import { Column } from "../column";

const Table = props => {
  const [activePage, setActivePage] = useState(0);
  const [showPagination, setShowPagination] = useState(false)
  const [rows, setRows] = useState([]);
  const [sortBy, setSortBy] = useState({
    sortBy: props.options.sortBy,
    sortingOrder: props.options.sortingOrder || "ASC"
  });

  const itemsPerPage = props.options.itemsPerPage || 10;

  const changePageWithData = (pageId) => {
    const sortedData = getSortedData(props.colDef, props.rowData, sortBy)
    const newRows = getDataWithinIndexRange(
      (pageId - 1) * itemsPerPage,
      pageId * itemsPerPage,
      sortedData
    );
    setRows(newRows);
    setActivePage(pageId);
  };

  useEffect(() => {
    setShowPagination(props.rowData && props.rowData.length >= itemsPerPage);
    changePageWithData(1)
  }, [sortBy, props.rowData])


  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <Column colDef={props.colDef} options={props.options} sort={setSortBy} />
        </thead>
        <tbody>
          <RowData colDef={props.colDef} rowData={rows || []} options={props.options} />
        </tbody>
      </table>
      {showPagination && (
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={props.rowData ? props.rowData.length : 0}
          onChange={changePageWithData}
          itemClass="page-item"
          linkClass="page-link"
        />
      )}
    </div>
  );
};

export { Table };
