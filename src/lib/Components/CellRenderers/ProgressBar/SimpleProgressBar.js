import React from 'react';
import { ProgressBar } from 'react-bootstrap';


export default ({ bars = [] } = {}) => {
    return (
        <ProgressBar>
            {bars.map(({ variant = "", now = Number, label }, index) => <ProgressBar
                key={index}
                striped
                animated
                variant={variant}
                now={now}
                lable={label}
            />)}
        </ProgressBar>
    );
};