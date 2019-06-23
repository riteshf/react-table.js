import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card } from 'react-bootstrap';
import { Options } from './options';
const Header = (props) => {
    const headerStyle = props.header && props.header.style ? props.header.style : {};
    return (
        <header className="panel-heading" style={headerStyle}>
            <Row>
                <Col md={{ span: 6 }}>
                    <Card.Title onClick={() => props.showTable()}>
                        {props.header.icon && <FontAwesomeIcon icon={props.header.icon} />}
                        {" "}
                        {props.header.name}
                    </Card.Title>
                </Col>
                <Col md={{ span: 6 }}>
                    {props.showOptions && props.header.options && (<Options options={props.header.options} onSearch={props.onSearch} />)}
                </Col>
            </Row>
        </header>
    )
}
export { Header }