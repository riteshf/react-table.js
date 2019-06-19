import React, { useState, useEffect } from "react";
import { filterRows } from "../Utils/rows";

const getRows = (colDef, inputRowData, options) => {
    const [rowData, setRows] = useState(inputRowData);


    useEffect(() => setRows(inputRowData), [inputRowData])

    const rows = options ? filterRows(colDef, rowData, options) : rowData;
    return rows ? rows.map((row, key) => (
        <tr key={key}>
            {colDef.map((header, key) => (
                <td key={key} style={header.style || {}}>
                    {header.Cell ? header.Cell(row, key) : row[header.fieldName]}
                </td>
            ))}
        </tr>
    )) : [];
};

export { getRows };
