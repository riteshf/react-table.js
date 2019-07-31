import React, { useState } from "react"
import { InputGroup, FormControl } from "react-bootstrap";

const SearchBox = ({ onSearch }) => {
    const [value, setValue] = useState("");

    const onChange = (newValue) => {
        setValue(newValue);
        onSearch(newValue);
    };

    return (
        <InputGroup size="sm" style={{ maxWidth: "140px" }} >
            <FormControl placeholder="Search"
                value={value}
                onChange={(e) => onChange(e.target.value)} />
        </InputGroup>
    )
}

export { SearchBox };