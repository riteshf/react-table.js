const getDataWithinIndexRange = (from, to, data) =>
    data ? data.filter((row, index) => index >= from && index < to) : [];

const numberSort = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const stringSort = (a, b) => a.toUpperCase() < b.toUpperCase() ? -1 : 1;
const sortData = (data = [], fieldName, order) => {
    if (fieldName && data.length > 1) {
        const newData = data.sort((a, b) => typeof a[fieldName] === "number"
            ? numberSort(a[fieldName], b[fieldName])
            : stringSort(a[fieldName], b[fieldName]));
        return order === "ASC" ? newData : newData.reverse();
    } else {
        return data;
    }
};

const getFieldNameIfSortable = (columns, headerName) => {
    const col = columns.filter(col => col.name === headerName && col.options && col.options.sortable)[0];
    return col.fieldName;
};

const getSortedData = (colDef, rowData, sortBy) => {
    if (sortBy.sortBy) {
        const fieldName = getFieldNameIfSortable(colDef, sortBy.sortBy);
        return sortData(rowData, fieldName, sortBy.sortingOrder);
    } else {
        return rowData;
    }
};

export { getDataWithinIndexRange, getSortedData };