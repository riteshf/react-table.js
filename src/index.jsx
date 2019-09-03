import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import { faAddressBook, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

import { Table, AfterRow } from "./app";
import { SimpleProgressBar } from "./Components";

const bars = [
    {
        variant: "success",
        now: 0,
        label: "green",
    },
    {
        variant: "warning",
        now: 10,
        label: "yellow",
    },
    {
        variant: "danger",
        now: 10,
        label: "red",
    }
];
const filterchange = (newField, newValue) => {
    console.log("filter change", newField, newValue);
};


const App = () => {
    const [rowData, setRowData] = useState(null);
    const [pageId, setPageId] = useState(1);
    const [afterRowIndex, setAfterRowIndex] = useState(null);

    const tableOptions = {
        header: {
            name: "Sample Table",
            icon: faAddressBook,
            options: {
                refresh: {
                    style: {
                        color: "#428bca",
                        marginTop: "5px",
                    },
                    onChange: filterchange,
                },
                search: true,
                keyValueFilters: [
                    {
                        style: { color: "#428bca", },
                        defaultValue: "Last 3 Months",
                        valueObject: {
                            "Last Month": 2628000000,
                            "Last 3 Months": 7884000000,
                            "Last 12 Months": 31536000000,
                            "Last 18 Months": 47304000000,
                            "Beginning of Time": 0,
                        },
                        label: "Uploaded Since",
                        onFilterChange: filterchange,
                    }
                ],
                buttons: [(
                    <Button key={"1"} variant="primary" size="sm" onClick={filterchange} style={{ marginLeft: "10px", maxHeight: "36px" }}>
                        <FontAwesomeIcon icon={faPlus} /> Create
                    </Button>
                )],
                afterRow: {
                    index: afterRowIndex,
                    Cell: <h1>Hi</h1>,
                    id: "b",
                }
            },
        },
        colDef: [
            {
                name: "",
                fieldName: "",
                style: { textAlign: "center", width: "10px" },
                options: {},
                Cell: (row, index) => AfterRow({ keyIndex: row.b, afterRowIndex: afterRowIndex, setAfterRowIndex: setAfterRowIndex }),
            },
            {
                name: "a a",
                fieldName: "a",
                style: { textAlign: "center" },
                options: {
                    sortable: true,
                    searchable: true,
                },
                Cell: () => SimpleProgressBar({ bars, }),
            },
            {
                name: "b",
                fieldName: "b",
                options: {
                    sortable: true,
                    searchable: true,
                },
            },
        ],
        rowData: rowData,
        options: {
            style: { marginTop: "10px" },
            sortingOrder: "ASC",
            beforeTable: <h1>Before Table</h1>,
            defaultShowTable: true,
            paginationOptions: {
                itemsPerPage: 5,
                pageRangeDisplayed: 1,
                pageId: pageId,
                defaultPaginationEnabled: true,
                getNext: (currentDataArray, pageId) => {
                    setRowData(currentDataArray.concat([
                        { a: "zzz", b: 999 },
                        { a: "zzz", b: 999 },
                        { a: "zzz", b: 999 },
                        { a: "zzz", b: 999 },
                        { a: "zzz", b: 999 },
                        { a: "zzz", b: 999 },
                        { a: "zzz", b: 999 },
                        { a: "zzz", b: 999 },
                        { a: "zzz", b: 999 },
                        { a: "zzz", b: 999 },
                        { a: "zzz", b: 999 },
                        { a: "zzz", b: 999 }
                    ]));
                    return setPageId(pageId);
                },
            }
        },
    };
    useEffect(() => {
        setTimeout(() => {
            setRowData([
                { a: "aba", b: 0 },
                { a: "aal", b: 4 },
                { a: "eaa", b: 7 },
                { a: "aca", b: 8 },
                { a: "aak", b: 9 },
                { a: "daa", b: 3 },
                { a: "ada", b: 1 },
                { a: "aaj", b: 14 },
                { a: "caa", b: 5 },
                { a: "aea", b: 6 },
                { a: "aai", b: 2 },
                { a: "baa", b: 10 },
                { a: "afa", b: 11 },
                { a: "aah", b: 12 },
                { a: "aga", b: 13 },
            ]);
        }, 3000);
    }, []);
    return (
        <div className="container">
            <Table {...tableOptions} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
