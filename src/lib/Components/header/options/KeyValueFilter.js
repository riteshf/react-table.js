import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const KeyValueFilter = ({
    defaultValue = "",
    valueObject = {},
    label = "",
    onFilterChange,
    style = {}
}) => {
    const [newValue, updateDefaultValue] = React.useState(defaultValue);
    const changeFilter = (newField) => {
        updateDefaultValue(newField);
        onFilterChange(newField, valueObject[newField]);
    };

    return (
        <Form.Group as={Row} controlId={label} className="flex" style={{ flexDirection: 'row-reverse' }}>
            <Col>
                <Form.Control as="select" size="sm"
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
            </Col>
            {label && (<Form.Label style={style}>{label}:</Form.Label>)}
        </Form.Group>
    );
};

export default KeyValueFilter;
