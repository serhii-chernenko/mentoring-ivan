function findAverage(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array.reduce((acc, current) => acc + current, 0) / array.length;
    }
}
