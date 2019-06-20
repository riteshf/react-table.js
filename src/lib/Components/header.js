import React, { useState, useEffect } from "react";

import { Sortable } from "./HeaderOptions"
const Header = ({ colDef, options, sort }) => {
    const [columns, setColumns] = useState([]);

    const updateCurrentState = (headerName) => {
        setColumns(columns.map(column => {
            if (column.name === headerName) {
                column.options.sortBy = headerName;
                column.options.sortingOrder = column.options.sortingOrder === "ASC" ? "DESC" : "ASC";
                sort({
                    sortBy: headerName,
                    sortingOrder: column.options.sortingOrder === "ASC" ? "DESC" : "ASC",
                })
            } else {
                delete column.options.sortBy;
                delete column.options.sortingOrder;
            }
            return column;
        }))
    };

    useEffect(() => {
        setColumns(colDef.map(column => {
            column.options = column.options || {};
            if (column.name === options.sortBy) {
                column.options.sortBy = options.sortBy;
                column.options.sortingOrder = options.sortingOrder === "ASC" ? "DESC" : "ASC";
            } else {
                delete column.options.sortBy;
                delete column.options.sortingOrder;
            }
            return column;
        }))
    }, []);
    return (
        <tr>{columns.map((column, key) => (
            <th key={key} style={column.style || {}}>
                <span onClick={() => column.options.sortable && updateCurrentState(column.name)}>
                    {column.name}&nbsp;
                </span>
                {column.options.sortable ? <Sortable column={column} /> : null}
            </th>
        ))}</tr>
    );
};

export { Header };
