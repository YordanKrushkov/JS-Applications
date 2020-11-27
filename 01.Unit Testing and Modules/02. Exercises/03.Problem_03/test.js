let { assert } = require('chai');
let { lookupChar } = require('./03.clearLockUp.js');

describe('clearLookUp', () => {
    it('Should return an undefind in an incorrect first param', () => {
        assert.equal(undefined, lookupChar(5, 0))
    });

    it('Should return an undefind in an incorrect second param', () => {
        assert.equal(undefined, lookupChar('string', 'javascript'))
    });

    it('Should return an incorrrect index in an incorrect first param length', () => {
        assert.equal('Incorrect index', lookupChar('string', 6))
    });

    it('Should return an incorrrect index in an incorrect second param lower than 0', () => {
        assert.equal('Incorrect index', lookupChar('string', -1))
    });

    it('Should return an corrrect', () => {
        assert.equal('s', lookupChar('js', 1))
    });


})