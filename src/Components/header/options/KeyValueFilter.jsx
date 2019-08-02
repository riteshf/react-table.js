import React from "react";
import { Row, Col } from "react-bootstrap";

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
        <Row style={{ marginRight: "5px", alignContent: "center" }}>
            <Col>
                {label && (<label style={style}>{label}:&nbsp;</label>)}
                <select
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
    );
};

export default KeyValueFilter;
