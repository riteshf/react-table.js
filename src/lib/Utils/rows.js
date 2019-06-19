const sortData = (data, fieldName, order) => {
    if (data && data.length > 1) {
        const newData = data.sort((a, b) => a[fieldName] - b[fieldName])
        return order === 'ASC' ? newData : newData.reverse();
    } else {
        return data;
    }

}

const getDataWithinIndexRange = (from, to, data) =>
    data ? data.filter((row, index) => index >= from && index < to) : [];


export { getDataWithinIndexRange, sortData };