import React, { useState } from "react";
import { Table }  from './table';
import { Header }  from './header';

const Container = props => {
  const [showTable, shouldShowTable] = useState(props.options.defaultShowTable || true);
  const setShowTable = () => shouldShowTable(!showTable)
  return (
    <section className="panel panel-default">
      {props.header && <Header header={props.header} showTable={setShowTable} />}
      <div className="panel-body">
        {showTable && <Table colDef={props.colDef} rowData={props.rowData} options={props.options}/>}
      </div>
    </section>
  );
};

export { Container };