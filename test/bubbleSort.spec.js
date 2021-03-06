import chai from 'chai'
import {
    bubbleSort
} from '../src/bubbleSort'

let expect = chai.expect;

describe('bubbleSort', () => {
    it('sorts list', () => {
        let list = [23, 4, 42, 15, 16, 8];

        bubbleSort(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('sort list with duplicate elements', () => {
        let list = [23, 4, 42, 15, 16, 8, 23, 4];

        bubbleSort(list);

        expect(list).to.deep.equal([4, 4, 8, 15, 16, 23, 23, 42]);
    })

    it('sorts already sorted list', () => {
        let list = [4, 8, 15, 16, 23, 42];

        bubbleSort(list);

        expect(list).to.deep.equal([4, 8, 15, 16, 23, 42]);
    })

    it('sorts 1-element list', () => {
        let list = [5];

        bubbleSort(list);

        expect(list).to.deep.equal([5]);
    })

    it('sorts empty list', () => {
        let list = [];

        bubbleSort(list);

        expect(list).to.deep.equal([]);
    })

    it('throws for null list', () => {
        expect(bubbleSort.bind(null, null)).to.throw('Invalid list');
    })
});