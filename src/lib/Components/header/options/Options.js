import React, { Fragment } from "react";
import { Row, Col } from 'react-bootstrap';
import KeyValueFilter from './KeyValueFilter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { SearchBox } from "./Search";

const Options = ({ options: { keyValueFilters = [], search, refresh, buttons = [] }, onSearch } = {}) => {
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
            {buttons.map((button, i) => (
                <Fragment key={i}>
                    {button}
                </Fragment>
            ))
            }
            {search && <SearchBox onSearch={onSearch} />}
            {" "}
            {
                keyValueFilters.map((kVF, i) => (
                    <Col key={i} style={kVF.style}>
                        <KeyValueFilter {...kVF} />
                    </Col>
                ))
            }
        </Row >
    );
};

export { Options };
