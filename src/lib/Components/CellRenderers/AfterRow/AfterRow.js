import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const AfterRow = ({ keyIndex, afterRowIndex, setAfterRowIndex }) => {
    
    const [font, setFont] = useState(faPlusSquare);
    
    const getNewFont = (currentFont) => currentFont === faPlusSquare ? faMinusSquare : faPlusSquare;
    
    const getFont = (afterRowIndex) => {
        if (afterRowIndex >= 0 && afterRowIndex === keyIndex) {
            // console.log(afterRowIndex, keyIndex)
            setFont(getNewFont(font));
            setAfterRowIndex(null);
        } else {
            setAfterRowIndex(keyIndex);
            setFont(faPlusSquare);
        }
    }

    return (
        <span onClick={() => getFont(afterRowIndex)}>
            <FontAwesomeIcon icon={font} />
        </span >
    )
};

export default AfterRow;