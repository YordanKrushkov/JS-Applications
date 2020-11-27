let { assert } = require('chai');
const mathEnforcer = require('./04.Math Enforcer');
let { addFive, subtractTen, sum } = require('./04.Math Enforcer');


describe('mathEnforcer', () => {

    describe('addFive', () => {
        it('Should return undefined if the type is different than number', () => {
            assert.equal(undefined, addFive('string'));
        })
        it('Should return correct value', ()=>{
            assert.equal(10,addFive(5));
        })
    })

    describe('subtractTen', () => {
        it('Should return undefined if the type is different than number', () => {
            assert.equal(undefined, subtractTen('string'));
        })
        it('Should return correct value', ()=>{
            assert.equal(10,subtractTen(20));
        })
    })

    describe('sum', () => {
        it('Should return undefined if the first param is different than number', () => {
            assert.equal(undefined, sum('string', 5))
        })

        it('Should return undefined if the second param is different than number', () => {
            assert.equal(undefined, sum(5, 'string'));
        })

        it('Should return correct value', ()=>{
            assert.equal(10,sum(5,5));
        })
    })
})
