import React, {Fragment} from "react";

const getSortableView = () => {};

const applyOtherHeaderOptions = (options, shouldSortBy, sortingOrder) => {
    const sortable = options.sortable;

    return <Fragment>{sortable ? getSortableView(shouldSortBy, sortingOrder) : null}</Fragment>;
};

const getHeaders = (colDef, options) => {
    return colDef.map((header, key) => {
        return (
            <th key={key} style={header.style || {}}>
                {header.name}
                {/* {applyOtherHeaderOptions(
                    options,
                    header.name === options.sortBy,
                    options.sortingOrder
                )} */}
            </th>
        );
    });
};

export { getHeaders };
