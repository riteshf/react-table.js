import React, { useState } from "react";
import { Table }  from './table';

const Container = props => {
  const [showTable, shouldShowTable] = useState(props.options.defaultShowTable || true);
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
      <div className="panel-body">
        {showTable && (<Table colDef={props.colDef} rowData={props.rowData} options={props.options}/>)}
      </div>
    </section>
  );
};

export { Container };