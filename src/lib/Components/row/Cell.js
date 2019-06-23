import React from 'react';



const Cell = ({ style = {}, value = "", cellIndex = null, setAfterRow, cellOptions }) => {

    const checkAndSetAfterRow = (afterRow) => (afterRow.index === cellIndex) && setAfterRow(afterRow);
    return (
        <td style={style} onClick={() => checkAndSetAfterRow(cellOptions.afterRow)}>
            {value}
        </td>
    )
};

export { Cell }