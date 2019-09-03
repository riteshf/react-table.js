import React from "react";
import { Row } from "./Row";
import { AfterRow } from "./AfterRow";
import { getFieldValueFromRowData } from "../../Utils/rows";

const RowAfterRowCombo = ({ colDef = [], row = [], rowIndex = 0, afterRowCell = () => { }, afterRowIndex = null }) => {
    const rowId = getFieldValueFromRowData(rowIndex, row);
    return (
        <>
            <Row
                columns={colDef}
                row={row}
                rowIndex={rowId}
            />
            {rowId === afterRowIndex ? <AfterRow
                afterRowCell={afterRowCell}
                colSpan={colDef.length}
            /> : null}
        </>
    );
};

export { RowAfterRowCombo };