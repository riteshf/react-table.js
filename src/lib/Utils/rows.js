const numberSort = (a, b) => a - b;

const stringSort = (a, b) => a.toUpperCase() < b.toUpperCase() ? -1 : 1;

const sortData = (data, fieldName, order) => {
    if (data && data.length > 1) {
        const newData = data.sort((a, b) => {
            typeof a[fieldName] === 'number'
                ? numberSort(a[fieldName], b[fieldName])
                : stringSort(a[fieldName], b[fieldName]);
        })
        return order === 'ASC' ? newData : newData.reverse();
    } else {
        return data;
    }
}

const getDataWithinIndexRange = (from, to, data) =>
    data ? data.filter((row, index) => index >= from && index < to) : [];


export { getDataWithinIndexRange, sortData };