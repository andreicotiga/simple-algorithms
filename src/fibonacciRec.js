'use strict'

//calculates the Fibonacci number at the specified 'position' recursively
const fibonacciRec = (position) => {
    let initial = [0, 1]

    if (position < 2) {
        return initial[position];
    }
    else {
        return fibonacciRec(position - 1) + fibonacciRec(position - 2);
    }
}

export default fibonacciRec;