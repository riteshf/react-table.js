import React from "react";
import { filterRows } from "../Utils/rows";

const getRows = (colDef, rowData, options) => {
    const rows = options ? filterRows(colDef, rowData, options) : rowData;
    return rows ? rows.map((row, key) => (
        <tr key={key}>
            {colDef.map((header, key) => (
                <td key={key} style={header.style || {}}>
                    {header.Cell ? header.Cell(row, key) : row[header.fieldName]}
                </td>
            ))}
        </tr>
    )): [];
};

export { getRows };
