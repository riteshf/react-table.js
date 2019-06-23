import React, { Fragment } from "react";
import { Row, Col } from 'react-bootstrap';
import KeyValueFilter from './KeyValueFilter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { SearchBox } from "./Search";

const Options = ({ options: { keyValueFilters = [], search, refresh, create }, onSearch } = {}) => {
    console.log(create)
    return (
        <Row style={{ flexDirection: 'row-reverse' }}>

            {refresh &&
                <Col md={1}>
                    <div
                        onClick={refresh.onChange}>
                        <FontAwesomeIcon
                            icon={faSync}
                            size="lg"
                            style={refresh.style || {}}
                        />
                    </div>
                </Col>}
            {" "}
            {create && <Col md={2}>
                {create()}
                {" "}
            </Col>}
            {search && <SearchBox onSearch={onSearch} />}
            {" "}
            {keyValueFilters.map((kVF, i) => (
                <Col key={i} md={5}>
                    <KeyValueFilter {...kVF} />
                </Col>
            ))}
        </Row>
    );
};

export { Options };
