let { assert } = require('chai');
let PaymentPackage = require('./06.Payment Package');

describe('PaymentPackage', () => {
    let paymentPackage;

    describe('constructor', () => {

        it('shoud work properly with two param', () => {
            paymentPackage = new PaymentPackage('string', 5);
            let expected = new PaymentPackage('string', 5);

            assert.deepEqual(paymentPackage, expected);
        })
        it('should throw an exception for a incorrect name', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage(5, 5);
            }, 'Name must be a non-empty string')
        })
        it('should throw an exception for a incorrect name length 0', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('', 5);
            }, 'Name must be a non-empty string')
        })
        it('should throw an exception for a incorrect value', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('string', '5');
            }, 'Value must be a non-negative number')
        })
        it('should throw an exception for a value less than 0', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('string', -1);
            }, 'Value must be a non-negative number')
        })



    })
})