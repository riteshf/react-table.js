import React, { Fragment } from "react";
import { Row, Col } from 'react-bootstrap';
import KeyValueFilter from './KeyValueFilter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { SearchBox } from "./Search";

const Options = ({ options: { keyValueFilters = [], search = false, refresh }, onSearch } = {}) => {
    return (
        <Row className="pull-right">
            {keyValueFilters.map((kVF, i) => (
                <Col key={i}>
                    <KeyValueFilter {...kVF}/>
                </Col>
            ))}
            <Col md={4}>
                {search && <SearchBox onSearch={onSearch} />}
            </Col>
            <Col md={1}>
                {refresh && <div
                    onChange={refresh.onChange}>
                    <FontAwesomeIcon
                        icon={faSync}
                        style={refresh.style || {}}
                    />
                </div>}
            </Col>
        </Row>
    );
};

export { Options };
