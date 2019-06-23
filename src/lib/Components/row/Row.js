import React, { Fragment } from "react";
import { Cell } from "./Cell";

const Row = (
    { columns, row, rowIndex, setAfterRow } = { columns: [], row: {}, rowIndex: null }
) => {

    return (
        <tr >
            {columns.map((column, key) => (
                <Fragment key={key}>
                    <Cell
                        cellIndex={rowIndex}
                        setAfterRow={setAfterRow}
                        cellOptions={column.options}
                        style={column.style || {}}
                        value={column.Cell ? column.Cell(row, key) : row[column.fieldName]}
                    />
                </Fragment>
            ))}
        </tr>
    )
};

export { Row };
