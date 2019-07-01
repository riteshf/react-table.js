import React from 'react';
import { ProgressBar } from 'react-bootstrap';


export default ({ bars = [] } = {}) => {
    return (
        <ProgressBar>
            {bars.map(({ variant = "", now = Number }, index) => <ProgressBar
                key={index}
                striped
                variant={variant}
                now={now}
            />)}
        </ProgressBar>
    );
};