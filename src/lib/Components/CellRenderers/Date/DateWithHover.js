import React from 'react';

const DateWithHover = ({ hover, value = 0, format = "DD-MMM-YYYY", style = {} }) => {
    return (
        <OverlayTrigger
            placement="bottom"
            overlay={
                <Tooltip id={"tooltip-bottom"}>
                    {hover}
                </Tooltip>
            }>
            <div style={style}>
                {format(value, format)}
            </div>
        </OverlayTrigger>
    );
};

export default DateWithHover;