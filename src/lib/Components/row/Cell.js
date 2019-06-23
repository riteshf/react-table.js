import React from 'react';



const Cell = ({ style = {}, value = "", cellIndex = null, setAfterRow, cellOptions }) => {

    const checkAndSetAfterRow = (afterRow) => {
        console.log(afterRow);
        if (afterRow.index === cellIndex) setAfterRow(afterRow)
    };
    return (
        <td style={style} onClick={() => checkAndSetAfterRow(cellOptions.afterRow)}>
            {value}
        </td>
    )
};

export { Cell }