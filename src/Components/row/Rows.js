import React, { useState, useEffect, Fragment } from "react";
import { RowAfterRowCombo } from "./RowAfterRowCombo";



const Rows = ({ colDef = [], rowData = [], headerOptions = { afterRow: { index: null, Cell: null } } } = {}) => {
    const [afterRowIndex, setAfterRowIndex] = useState(headerOptions.afterRow ? headerOptions.afterRow.index : null);

    useEffect(() => {
        setAfterRowIndex(headerOptions.afterRow ? headerOptions.afterRow.index : null);
    }, [headerOptions.afterRow]);
    return (
        <>
            {rowData.map((row, key) => (
                <Fragment key={key}>
                    <RowAfterRowCombo
                        colDef={colDef}
                        row={row}
                        rowIndex={headerOptions.afterRow ? headerOptions.afterRow.id : key}
                        afterRowCell={headerOptions.afterRow ? headerOptions.afterRow.Cell : null}
                        afterRowIndex={afterRowIndex} />
                </Fragment>
            ))}
        </>
    );
};

export { Rows };
