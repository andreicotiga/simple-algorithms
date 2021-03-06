'use strict'

//The function sorts a list ascending using the 'Quick Sort' algorithm
const quickSort = (list) => {

    if (!list) {
        throw "Invalid list"
    }

    if (list.length < 2) {
        return list;
    }

    let left = [],
        right = [];

    //chose a pivot as the last element in the list (for optimal performance the pivot should be the median)
    const pivotIndex = Math.trunc(list.length / 2);
    const pivotValue = list[pivotIndex];

    //remove the pivot from the list
    list = list.slice(0, pivotIndex).concat(list.slice(pivotIndex + 1));

    //move values to the left/right lists depending on whether they are lower/greater than the pivot
    for (let i = 0; i < list.length; i++) {
        if (list[i] < pivotValue) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }

    return quickSort(left).concat([pivotValue], quickSort(right));
}

export default quickSort;