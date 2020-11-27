let assert = require('chai').assert;
let app = require('./isOddOrEven')
describe('isOddOrEven', () => {
   it('Should return undefind', () => {
      assert.equal(undefined, app(5));
   })
   it('Should return undefind param 2', () => {
      assert.equal(undefined, app({}));
   })
   it('Should return even', () => {
      assert.equal('even', app('word'));
   })
   it('Should return odd', () => {
      assert.equal('odd', app('words'));
   })
});