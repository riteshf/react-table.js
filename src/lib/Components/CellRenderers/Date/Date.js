import React from 'react';

const Date = ({ value = 0, format = "DD-MMM-YYYY", style = {} }) => {
    return (
        <div style={style}>
            {format(value, format)}
        </div>
    );
};

export default Date;