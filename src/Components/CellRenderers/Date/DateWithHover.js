import React from "react";
import { format } from "date-fns";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const DateWithHover = ({ hoverValue = 0, hoverFormat = "DD-MMM-YYYY", value = 0, valueFormat = "DD-MMM-YYYY", style = {} }) => {
    return (
        <OverlayTrigger
            placement="bottom"
            overlay={
                <Tooltip id={"tooltip-bottom"}>
                    {format(hoverValue, hoverFormat)}
                </Tooltip>
            }>
            <div style={style}>
                {format(value, valueFormat)}
            </div>
        </OverlayTrigger>
    );
};

export default DateWithHover;