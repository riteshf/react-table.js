import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Options } from "./options";
import { Col, Row } from "react-bootstrap";
const Header = ({ header = {}, showOptions, showTable, onSearch = "" } = {}) => {
    const headerStyle = header && header.style ? header.style : {};
    return (
        <div className="panel-heading panel-resize baseFieldColor">
            <Row>
                <Col>
                    <h4 onClick={() => showTable()} style={headerStyle}>
                        {header.icon && <FontAwesomeIcon icon={header.icon} style={{ color: "black" }} />}
                        {`  ${header.name}`}
                    </h4>
                </Col>
                <Col>
                    {showOptions && header.options && (<Options options={header.options} onSearch={onSearch} />)}
                </Col>
            </Row>
        </div>
    );
};
export { Header };