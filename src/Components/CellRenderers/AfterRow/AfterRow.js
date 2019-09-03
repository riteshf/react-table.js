import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const AfterRow = ({
    row = {},
    keyIndex = 0,
    afterRowIndex = null,
    setAfterRowIndex = () => { },
    setRowData = () => { }
}) => {
    const [font, setFont] = useState(faPlusSquare);

    const getFont = (afterRowIndex) => {
        if (Number.isInteger(afterRowIndex) && afterRowIndex === keyIndex) {
            setFont(faPlusSquare);
            setAfterRowIndex(null);
        } else {
            setAfterRowIndex(keyIndex);
            setFont(faMinusSquare);
            setRowData(row);
        }
    };

    return (
        <span key={keyIndex} onClick={() => getFont(afterRowIndex)}>
            <FontAwesomeIcon icon={font} />
        </span >
    )
};

export default AfterRow;