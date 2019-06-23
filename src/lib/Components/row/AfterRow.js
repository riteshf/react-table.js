import React from 'react';



const AfterRow = ({ afterRow = {}, currentIndex = null, colSpan = 2}) => (
    <>
        {
            afterRow.index === currentIndex ? (
                <tr>
                    <td colSpan={colSpan}>
                        {afterRow.Cell}
                    </td>
                </tr>) : null
        }
    </>
);

export { AfterRow }