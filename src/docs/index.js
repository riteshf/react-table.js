import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from 'react-dom';
import { Table } from '../lib';

const App = () => {
  const [rowData, setRowData] = useState(null)

  const tableOptions = {
    header: {
      name: "Sample Table",
    },
    colDef: [
      {
        name: "a a",
        style: { textAlign: "center" },
        options: {
          sortable: true,
        },
        Cell: row => (
          <span style={{ background: "red" }}>{row["a"]}</span>
        ),
      },
      { name: "b", fieldName: "b" },
    ],
    rowData: rowData,
    options: {
      sortingOrder: "ASC",
      itemsPerPage: 5,
      defaultShowTable: true,
    },
  };
  useEffect(() => {
    setTimeout(() => {
      setRowData([
        { a: "aba", b: 0 },
        { a: "aal", b: 4 },
        { a: "eaa", b: 7 },
        { a: "aca", b: 8 },
        { a: "aak", b: 9 },
        { a: "daa", b: 3 },
        { a: "ada", b: 1 },
        { a: "aaj", b: 14 },
        { a: "caa", b: 5 },
        { a: "aea", b: 6 },
        { a: "aai", b: 2 },
        { a: "baa", b: 10 },
        { a: "afa", b: 11 },
        { a: "aah", b: 12 },
        { a: "aga", b: 13 },
      ])
    }, 3000)
  }, [])
  return (
    <div className="container">
      <Table {...tableOptions} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
