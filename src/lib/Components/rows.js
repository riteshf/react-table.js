import React from "react";

const Rows = ({ colDef, rowData }) => {

    return rowData ? rowData.map((row, key) => (
        <tr key={key}>
            {colDef.map((header, key) => (
                <td key={key} style={header.style || {}}>
                    {header.Cell ? header.Cell(row, key) : row[header.fieldName]}
                </td>
            ))}
        </tr>
    )) : [];
};

export { Rows };
