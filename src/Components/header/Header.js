import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card } from "react-bootstrap";
import { Options } from "./options";
const Header = ({ header = {}, showOptions, showTable, onSearch = "" } = {}) => {
    const headerStyle = header && header.style ? header.style : {};
    return (
        <header className="panel-heading" style={headerStyle}>
            <Row>
                <Col md={{ span: 4 }}>
                    <Card.Title onClick={() => showTable()}>
                        {header.icon && <FontAwesomeIcon icon={header.icon} />}
                        {" "}
                        {header.name}
                    </Card.Title>
                </Col>
                <Col md={{ span: 8 }}>
                    {showOptions && header.options && (<Options options={header.options} onSearch={onSearch} />)}
                </Col>
            </Row>
        </header>
    )
}
export { Header }