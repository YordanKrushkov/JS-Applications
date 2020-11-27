let { assert } = require('chai');
let StringBuilder = require('./05.String Builder');

describe('StringBuilder', () => {
    let sb;
    beforeEach(() => {
        sb = new StringBuilder();
    })
    describe('vrfyParam', () => {
        it('shoud throw exception when param is not a string', () => {
            assert.throw(() => {
                new StringBuilder({});
            }, 'Argument must be а string')
        })
    })

    describe('constructor', () => {
        it('should work propely whithout an argument', () => {
            assert.equal('', sb.toString());
        })

        it('should work propely whith an argument', () => {
            sb = new StringBuilder('string')
            assert.equal('string', sb.toString());
        })
    })
    describe('append', () => {
        it('should append a text to the end of a strng', () => {
            sb.append('string');
            assert.equal('string', sb.toString());
        })
    })

    describe('prepend', () => {
        it('should append a text to start of a strng', () => {
            sb.prepend('string');
            assert.equal('string', sb.toString());
        })
    })
    describe('insertAt', () => {
        it('should insert a text at index', () => {
            sb.append('sring');
            sb.insertAt('t', 1)
            assert.equal('string', sb.toString());
        })
    })
    describe('remove', () => {
        it('should remove text at index', () => {
            sb.append('srtring');
            sb.remove(1, 1)
            assert.equal('string', sb.toString());
        })
    })
    describe('toString', () => {
        it('should return correct strng', () => {
            sb.append('string');
            assert.equal('string', sb.toString());
        })
    })
})