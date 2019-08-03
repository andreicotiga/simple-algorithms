'use strict';

//The function sorts a list using the 'Bubble Sort' algorithm
const bubbleSort = (list) => {
    if (list.length < 2) {
        return list;
    }

    //tells if we need to repeat the cycle
    let doItAgain = false;

    do {
        doItAgain = false;

        for (var i = 0; i < list.length - 1; i++) {
            if (list[i] > list[i + 1]) {
                //if found 2 elements that are not sorted, sort them and and set doItAgain as true, so we repeat the cycle
                let aux = list[i];
                list[i] = list[i + 1];
                list[i + 1] = aux;
                doItAgain = true;
            }
        }
    }
    while (doItAgain);
}

export default bubbleSort;