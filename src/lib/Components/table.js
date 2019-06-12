import React, { useState } from "react";
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.css";
import './table.css';
import { getDataWithinIndexRange } from "../Utils/rows";
import { getRows } from "./rows";
import { getHeaders } from "./header";

const Table = props => {
  const [activePage, setActivePage] = useState(0);
  const [showTable, shouldShowTable] = useState(props.options.defaultShowTable || true);
  const itemsPerPage = props.options.itemsPerPage || 10;
  const originalRows = getRows(props.colDef, props.rowData, props.options);
  const [rows, setRows] = useState(
    getDataWithinIndexRange(0, itemsPerPage, originalRows)
  );

  const changePageWithData = (pageId = 1) => {
    const newRows = getDataWithinIndexRange(
      (pageId - 1) * itemsPerPage,
      pageId * itemsPerPage,
      originalRows
    );
    setRows(newRows);
    setActivePage(newRows.length > itemsPerPage ? pageId - 1 : 0);
  };

  return (
    <section className="panel panel-default">
      {props.header && <header className="panel-heading" style={props.header.style || {}}>
        <div onClick={() => shouldShowTable(!showTable)}>
          {props.header.name}
        </div>
      </header>}
      {showTable && (<div className="panel-body table-responsive">
        <table className="table table-hover" id={props.header}>
          <thead>
            <tr>{getHeaders(props.colDef, props.options)}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        {originalRows.length <= itemsPerPage || (
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={originalRows.length}
            onChange={changePageWithData}
            itemClass="page-item"
            linkClass="page-link"
          />
        )}
      </div>)}
    </section>
  );
};

export { Table };
