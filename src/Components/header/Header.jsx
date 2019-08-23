import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Options } from "./options/Options";

const Header = ({ header = {}, showOptions, showTable, onSearch = "" } = {}) => {
    const headerStyle = header && header.style ? header.style : {};
    return (
        <div className="panel-heading panel-resize" style={{ height: "26" }}>
            <span onClick={() => showTable()} style={{ ...headerStyle, fontSize: "initial", cursor: "pointer" }}>
                <b>
                    {header.icon && <FontAwesomeIcon icon={header.icon} style={{ color: "black" }} />}
                    {`  ${header.name}`}
                </b>
            </span>
            {showOptions && header.options && (<Options options={header.options} onSearch={onSearch} />)}
        </div>
    );
};
export { Header };