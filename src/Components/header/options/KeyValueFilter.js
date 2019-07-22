import React from "react";
import { Row, Col } from "react-bootstrap";

const KeyValueFilter = ({
    defaultValue,
    valueObject,
    label,
    onFilterChange,
}) => {
    const [newValue, updateDefaultValue] = React.useState(defaultValue);
    const changeFilter = (newField) => {
        updateDefaultValue(newField);
        onFilterChange(newField);
    };

    return (
        <>
            <Row>
                <Col>
                    {label && (
                        <div
                            style={{
                                height: "24px",
                                fontSize: "12px",
                                padding: "3px",
                            }}>
                            <label style={{ color: "#428bca" }}>{label}:</label>
                        </div>
                    )}
                </Col>
                <Col>
                    <select
                        style={{
                            height: "24px",
                            fontSize: "12px",
                            padding: "3px",
                        }}
                        defaultValue={newValue}
                        onChange={(e) =>
                            changeFilter(e.target.value)
                        }>
                        {Object.keys(valueObject).map(field => (
                            <option key={field} value={field}>
                                {field}
                            </option>
                        ))}
                    </select>
                </Col>
            </Row>
        </>
    );
};

export default KeyValueFilter;
