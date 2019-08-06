import React from "react";
import KeyValueFilter from "./KeyValueFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { SearchBox } from "./Search";

const Options = ({ options: { keyValueFilters = [], search, refresh, buttons = [] }, onSearch } = {}) => {
    return (
        <>
            {refresh && (<div style={{ paddingLeft: "5px", float: "right" }}
                onClick={refresh.onChange}>
                {" "}&nbsp;&nbsp;
                <FontAwesomeIcon
                    icon={faSync}
                    size="lg"
                    style={refresh.style || {}}
                />
                {" "}&nbsp;&nbsp;
            </div>)}
            {buttons.map((button, i) => (
                <div style={{ paddingLeft: "5px", float: "right" }} key={i}>
                    {button}
                </div>
            ))
            }
            {search && <SearchBox onSearch={onSearch} />}
            {
                keyValueFilters.map((kVF, i) => (
                    <div style={{ paddingLeft: "5px", float: "right" }} key={i}>
                        <KeyValueFilter {...kVF} />
                    </div>
                ))
            }
        </>
    );
};

export { Options };
