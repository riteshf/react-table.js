import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from '../lib';

const tableOptions = {
  header: {
    name: "Sample Table",
  },
  colDef: [
    {
      name: "a",
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
  rowData: null,
  options: {
    sortBy: "b",
    sortingOrder: "ASC",
    itemsPerPage: 10,
    defaultShowTable: true,
  },
};

const App = () => (
  <div className="container">
    <Table {...tableOptions} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
