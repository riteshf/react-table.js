import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

const Sortable = ({ column }) => {
    const [show, setShow] = useState(column.options.sortBy);

    useEffect(() => setShow(column.options.sortBy), [column.options.sortBy])
    return (
        <>
            {show && <FontAwesomeIcon icon={column.options.sortingOrder === "DESC" ? faSortUp : faSortDown} style={column.style || {}} />}
        </>
    );
}

export { Sortable }