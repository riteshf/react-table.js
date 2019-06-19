import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.css";
import './table.css';
import { getDataWithinIndexRange } from "../Utils/rows";
import { Rows } from "./Rows";
import { Header } from "./Header";

const Table = props => {
  const [activePage, setActivePage] = useState(0);
  const [showPagination, setShowPagination] = useState(false)
  const [showTable, shouldShowTable] = useState(props.options.defaultShowTable || true);
  const itemsPerPage = props.options.itemsPerPage || 10;
  const [rows, setRows] = useState([]);

  const changePageWithData = (pageId) => {
    const newRows = getDataWithinIndexRange(
      (pageId - 1) * itemsPerPage,
      pageId * itemsPerPage,
      props.rowData
    );
    setRows(newRows);
    setActivePage(pageId);
  };

  useEffect(() => {
    changePageWithData(1)
    setShowPagination(props.rowData && props.rowData.length >= itemsPerPage);
  }, [props.rowData])
  const headerStyle = props.header && props.header.style ? props.header.style : {};

  return (
    <section className="panel panel-default">
      {
        props.header && (
          <header className="panel-heading" style={headerStyle}>
            <div onClick={() => shouldShowTable(!showTable)}>
              {props.header.name}
            </div>
          </header>
        )
      }
      {showTable && (<div className="panel-body table-responsive">
        <table className="table table-hover">
          <thead>
              <Header colDef={props.colDef} options={props.options} />
          </thead>
          <tbody>
            <Rows colDef={props.colDef} rowData={rows} options={props.options} />
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
      </div>)}
    </section>
  );
};

export { Table };
