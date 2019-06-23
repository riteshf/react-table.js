import React, { useState, useEffect } from "react";
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

const Container = props => {
  const [showTable, shouldShowTable] = useState(props.options.defaultShowTable || true);
  const [rowData, setRowData] = useState(props.rowData);
  const [searchString, setSearchString] = useState('');
  const setShowTable = () => shouldShowTable(!showTable)

  useEffect(() => {
    setRowData(filterData(searchString, props.colDef, props.rowData))
  }, [searchString, props.rowData])

  return (
    <section className="panel panel-default">
      {props.header && <Header header={props.header} showOptions={showTable} showTable={setShowTable} onSearch={setSearchString} />}
      <div className="panel-body">
        {showTable && <Table colDef={props.colDef} rowData={rowData} options={props.options} />}
      </div>
    </section>
  );
};

export { Container };