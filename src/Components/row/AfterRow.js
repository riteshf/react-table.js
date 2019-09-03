import React from "react";



const AfterRow = ({ afterRowCell = { Cell: null }, colSpan = 2 } = {}) => (
    <tr>
        <td colSpan={colSpan}>
            {afterRowCell}
        </td>
    </tr>
);

export { AfterRow };