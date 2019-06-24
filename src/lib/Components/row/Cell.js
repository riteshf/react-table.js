import React from 'react';



const Cell = ({ style = {}, value = "", cellIndex = null, setAfterRow, columnOptions, headerOptions }) => {

    const checkAndSetAfterRow = (afterRow) => (afterRow && afterRow.index === cellIndex) && setAfterRow(afterRow);
    return (
        <td style={style} onClick={() => checkAndSetAfterRow(headerOptions.afterRow)}>
            {value}
        </td>
    )
};

export { Cell }