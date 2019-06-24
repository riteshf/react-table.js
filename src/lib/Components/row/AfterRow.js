import React from 'react';



const AfterRow = ({ afterRow = { index: null, Cell: null }, currentIndex = null, colSpan = 2 } = {}) => {
    return (
        <>
            {afterRow && afterRow.index === currentIndex ? (
                <tr>
                    <td colSpan={colSpan}>
                        {afterRow.Cell}
                    </td>
                </tr>) : null}
        </>
    )
};

export { AfterRow }