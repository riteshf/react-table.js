import React, { useState, useEffect } from "react";

import './container.css';
import { Table } from './table';
import { Header } from './header';



const getSearchableFieldNames = (columns) => columns
  .filter(column => column.options && column.options.searchable)
  .map(column => column.fieldName);


const filterData = (searchString = '', columns = [], rows = []) => {
  const fieldNames = getSearchableFieldNames(columns);
  return searchString ? rows
    .filter(row => fieldNames
      .filter(
        field => String(row[field]).toLowerCase().startsWith(searchString.toLowerCase())
      ).length
    ) : rows;
}

const Container = ({ header = {}, colDef = [], rowData = [], options = {} } = {}) => {
  const [showTable, shouldShowTable] = useState(options.defaultShowTable || true);
  const [rows, setRows] = useState(rowData);
  const [searchString, setSearchString] = useState('');
  const setShowTable = () => shouldShowTable(!showTable)

  useEffect(() => {
    setRows(filterData(searchString, colDef, rowData))
  }, [searchString, rowData])

  return (
    <section className="panel panel-default" style={options.style || {}}>
      <Header header={header} showOptions={showTable} showTable={setShowTable} onSearch={setSearchString} />
      <div className="panel-body">
        {showTable && <Table colDef={colDef} rowData={rows} options={options} header={header} />}
      </div>
    </section>
  );
};

export { Container };