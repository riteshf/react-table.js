import React from 'react';
import { Row } from './Row';
import { AfterRow } from './AfterRow';

const RowAfterRowCombo = ({ colDef = [], row = [], rowIndex = 0, afterRowCell = Function, afterRowIndex = null }) => {

    return (
        <>
            <Row
                columns={colDef}
                row={row}
                rowIndex={rowIndex}
            />
            {rowIndex === afterRowIndex ? <AfterRow
                afterRowCell={afterRowCell}
                colSpan={colDef.length}
            /> : null}
        </>
    );
}

export { RowAfterRowCombo }