import React, { Fragment } from "react";
import { Cell } from "./Cell";

const Row = ({ columns, row, rowIndex } = { columns: [], row: {} }) => (
    <tr >
        {columns.map((column, key) => (
            <Fragment key={key}>
                <Cell
                    style={column.style || {}}
                    value={column.Cell ? column.Cell(row, rowIndex) : row[column.fieldName]}
                />
            </Fragment>
        ))}
    </tr>
);

export { Row };
