import React, { useState, Fragment } from 'react';
import { Row} from './Row';


const Rows = ({ colDef, rowData }) => {
    const [afterRow, setAfterRow] = useState(null);

    return (
        <>
            {rowData.map((row, key) => (
                <Fragment key={key}>
                    <Row columns={colDef} row={row} rowIndex={key} setAfterRow={setAfterRow} />
                    {afterRow && <AfterRow
                        afterRow={afterRow}
                        currentIndex={key}
                        colSpan={colDef.length}
                        row={row}
                    />}
                </Fragment>
            ))}
        </>
    )
}

export { Rows };
