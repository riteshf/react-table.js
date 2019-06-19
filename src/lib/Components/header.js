import React, { useState, useEffect } from "react";

import { Sortable } from "./HeaderOptions"
const Header = ({ colDef, options }) => {
    const [columns, setColumns] = useState([]);

    const updateCurrentState = (fieldName) => {
        setColumns(columns.map(column => {
            if (column.name === fieldName) {
                column.options.sortBy = fieldName;
                column.options.sortingOrder = column.options.sortingOrder === "ASC" ? "DESC" : "ASC";
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
                <span onClick={() => updateCurrentState(column.name)}>
                    {column.name}&nbsp;
                </span>
                <Sortable column={column} />
            </th>
        ))}</tr>
    );
};

export { Header };
