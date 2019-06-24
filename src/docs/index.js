import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from 'react-dom';
import { Table } from '../lib';
import './index.css';
import { faAddressBook, faPlus, faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
  const [rowData, setRowData] = useState(null)
  const [afterRowIndex, setAfterRowIndex] = useState(null)

  const filterchange = (newField, newValue) => {
    console.log("filter change", newField, newValue)
  }
  const tableOptions = {
    header: {
      name: "Sample Table",
      icon: faAddressBook,
      options: {
        refresh: {
          style: {
            color: "#428bca",
            marginTop: '5px',
          },
          onChange: filterchange,
        },
        search: true,
        keyValueFilters: [
          {
            style: {
              color: "#428bca",
              marginTop: '5px',
            },
            defaultValue: "Last 3 Months",
            valueObject: {
              "Last Month": 2628000000,
              "Last 3 Months": 7884000000,
              "Last 12 Months": 31536000000,
              "Last 18 Months": 47304000000,
              "Beginning of Time": 0,
            },
            label: "Uploaded Since",
            onFilterChange: filterchange,
          }
        ],
        buttons: [(
          <Button variant="primary" onClick={filterchange} style={{ marginLeft: '5px' }}>
            <FontAwesomeIcon icon={faPlus} /> Create
          </Button>
        ), (
          <Button variant="primary" onClick={filterchange} style={{ marginLeft: '5px' }}>
            <FontAwesomeIcon icon={faPlus} /> Create
          </Button>
        )
        ],
        afterRow: {
          index: afterRowIndex,
          Cell: <h1>Hi</h1>,
        }
      },
    },
    colDef: [
      {
        name: "",
        fieldName: "",
        style: { textAlign: "center", width: '10px' },
        options: {},
        Cell: (row, index) => (
          <span onClick={() => setAfterRowIndex(afterRowIndex === index ? null : index)}>
            <FontAwesomeIcon
              icon={afterRowIndex ? faMinusSquare : faPlusSquare} />
          </span>
        ),
      },
      {
        name: "a a",
        fieldName: "a",
        style: { textAlign: "center" },
        options: {
          sortable: true,
          searchable: true,
        },
        Cell: row => (
          <span style={{ background: "red" }}>{row["a"]}</span>
        ),
      },
      {
        name: "b",
        fieldName: "b",
        options: {
          sortable: true,
          searchable: true,
        },
      },
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
    <div className="container" style={{ marginTop: '30px' }}>
      <Table {...tableOptions} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
