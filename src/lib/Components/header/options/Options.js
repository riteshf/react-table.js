import React from "react";
import { Row, Col } from 'react-bootstrap';
import KeyValueFilter from './KeyValueFilter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { SearchBox } from "./Search";

const Options = ({ options: { keyValueFilters = [], search, refresh, create }, onSearch } = {}) => {
    return (
        <Row style={{ flexDirection: 'row-reverse' }} className="flex">

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
            {create && <Col md={2}>{create}</Col>}
            {search && <SearchBox onSearch={onSearch} />}
            {" "}
            {keyValueFilters.map((kVF, i) => (
                <Col key={i} style={{maxWidth: kVF.style}}>
                    <KeyValueFilter {...kVF} />
                </Col>
            ))}
        </Row>
    );
};

export { Options };
