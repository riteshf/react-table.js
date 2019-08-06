import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { SearchBox } from "./options/Search";
import KeyValueFilter from "./options/KeyValueFilter";

const Header = ({ header = {}, showOptions, showTable, onSearch = "" } = {}) => {
    const headerStyle = header && header.style ? header.style : {};
    const options = header.options || {};
    return (
        <div className="panel-heading panel-resize" style={{ minHeight: "8vh" }}>
            <span onClick={() => showTable()} style={{ ...headerStyle, fontSize: "initial" }}>
                <b>
                    {header.icon && <FontAwesomeIcon icon={header.icon} style={{ color: "black" }} />}
                    {`  ${header.name}`}
                </b>
            </span>
            {showOptions ? (
                <>
                    {options.refresh && (<div style={{ paddingLeft: "5px", float: "right" }}
                        onClick={options.refresh.onChange}>
                        {" "}&nbsp;&nbsp;
                        <FontAwesomeIcon
                            icon={faSync}
                            size="lg"
                            style={options.refresh.style || {}}
                        />
                        {" "}&nbsp;&nbsp;
                    </div>)
                    }
                    {options.buttons.map((button, i) => (
                        <div style={{ paddingLeft: "5px", float: "right" }} key={i}>
                            {button}
                        </div>
                    ))
                    }
                    {options.search && <SearchBox onSearch={onSearch} />}
                    {
                        options.keyValueFilters.map((kVF, i) => (
                            <div style={{ paddingLeft: "5px", float: "right" }} key={i}>
                                <KeyValueFilter {...kVF} />
                            </div>
                        ))
                    }
                </>
            ) : null}
        </div>
    );
};
export { Header };