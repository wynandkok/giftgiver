import { max_number } from './index';

describe('max_number', () => {
    describe('given an empty array', () => {
        it('returns 0', () => {
            expect(max_number([])).toEqual(0);
        });
    });
    describe('given an array of numbers', () => {
        it('returns the maximum nuber', () => {
            expect(max_number([1,2,4,3])).toEqual(4);
        });
    });
});