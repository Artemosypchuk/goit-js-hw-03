function filterArray(numbers, value){
    const filterredNumbers = [];
    for (const number of numbers) {
        if (number > value) {
            filterredNumbers.push(number);
        }
    }
    return filterredNumbers;
}