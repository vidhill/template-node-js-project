const dummyFunction = require('./dummy-function');

describe("test 'dummyFunction()'", () => {
    it('should be a defined function', () => {
        expect(dummyFunction).not.toBeUndefined();
        expect(dummyFunction).toBeType('function');
    });
});
