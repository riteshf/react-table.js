import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const KeyValueFilter = ({
    defaultValue,
    valueObject,
    label,
    onFilterChange,
    style,
}) => {
    const [newValue, updateDefaultValue] = React.useState(defaultValue);
    const changeFilter = (newField) => {
        updateDefaultValue(newField);
        onFilterChange(newField);
    };

    return (
        <div>
            {label && (<Form.Label style={style} size="sm">{label}:&nbsp;</Form.Label>)}
            <Form.Control as="select" size="sm"
                style={{ fontSize: "12px", display: "initial", width: "fit-content" }}
                defaultValue={newValue}
                onChange={(e) =>
                    changeFilter(e.target.value)
                }>
                {Object.keys(valueObject).map(field => (
                    <option key={field} value={field}>
                        {field}
                    </option>
                ))}
            </Form.Control>
        </div>
    );
};

export default KeyValueFilter;
