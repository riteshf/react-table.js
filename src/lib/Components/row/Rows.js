import React, { useState, Fragment } from 'react';
import { Row } from './Row';
import { AfterRow } from './AfterRow';


const Rows = ({ colDef = [], rowData = [], headerOptions = {} } = {}) => {
    const [afterRow, setAfterRow] = useState(headerOptions.afterRow);

    return (
        <>
            {rowData.map((row, key) => (
                <Fragment key={key}>
                    <Row
                        columns={colDef}
                        row={row} rowIndex={key} 
                        setAfterRow={setAfterRow} 
                        headerOptions={headerOptions}
                         />
                    <AfterRow
                        afterRow={afterRow}
                        currentIndex={key}
                        colSpan={colDef.length}
                        row={row}
                    />
                </Fragment>
            ))}
        </>
    )
}

export { Rows };
