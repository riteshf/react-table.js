import React, { Fragment } from "react";
import { Cell } from "./Cell";

const Row = (
    { columns, row, rowIndex, setAfterRow, headerOptions } = { columns: [], row: {}, rowIndex: null, headerOptions: {} }
) => {

    return (
        <tr >
            {columns.map((column, key) => (
                <Fragment key={key}>
                    <Cell
                        cellIndex={rowIndex}
                        setAfterRow={setAfterRow}
                        columnOptions={column.options}
                        headerOptions={headerOptions}
                        style={column.style || {}}
                        value={column.Cell ? column.Cell(row, key) : row[column.fieldName]}
                    />
                </Fragment>
            ))}
        </tr>
    )
};

export { Row };
