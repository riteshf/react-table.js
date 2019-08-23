import React from "react";
import { ProgressBar } from "react-bootstrap";


const SimpleProgressBar = ({ bars = [] } = {}) => {
    return (
        <ProgressBar>
            {bars.map(({ variant = "", now = 0, label = "" }, index) => <ProgressBar
                key={index}
                striped
                variant={variant}
                now={now}
                lable={label}
            />)}
        </ProgressBar>
    );
};


export default SimpleProgressBar;