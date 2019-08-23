import React from "react";

const Cell = ({ style = {}, value = ""}) => {

    return (
        <td style={style}>
            {value}
        </td>
    )
};

export { Cell }