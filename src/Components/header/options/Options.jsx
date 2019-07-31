import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import KeyValueFilter from "./KeyValueFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { SearchBox } from "./Search";

const Options = ({ options: { keyValueFilters = [], search, refresh, buttons = [] }, onSearch } = {}) => {
    return (
        <Row style={{ flexDirection: "row-reverse" }} className="flex">
            {refresh && (<div
                onClick={refresh.onChange}>
                {" "}&nbsp;&nbsp;
                <FontAwesomeIcon
                    icon={faSync}
                    size="lg"
                    style={refresh.style || {}}
                />
                {" "}&nbsp;&nbsp;
            </div>)
            }
            {buttons.map((button, i) => (
                <Fragment key={i}>
                    {button}
                </Fragment>
            ))
            }
            {search && <SearchBox onSearch={onSearch} style={{ marginRight: "5px" }} />}
            {
                keyValueFilters.map((kVF, i) => (
                    <Fragment key={i}>
                        <KeyValueFilter {...kVF} />
                    </Fragment>
                ))
            }
        </Row >
    );
};

export { Options };
