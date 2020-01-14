const chai = require('chai')
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const expect = require('chai').expect;
var original = [2,3,6,4,1]
var sorted  = original
// is sorted
describe('Bubble-sort',()=>{
    before(function() {
        sorted = bubble(original)
    });
    it('Return an array',()=>{
        expect(sorted).to.be.array();
    })
    it('Return array with same length as original array',()=>{
        expect(sorted).to.be.ofSize(original.length);
    })
    it('Return array with same elements as original array',()=>{
        expect(sorted).to.be.containingAllOf(original);
    })
    it('Returning a sorted array',()=>{
        expect(sorted).to.be.sorted();
    })
})