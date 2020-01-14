var chai = require('chai')
var expect = require('chai').expect;
var bmi = require('../bmi').bmi
describe('BMI', () => {
    it('should output healthy', () => {
        expect(bmi(170,60)).to.be.equal('healthy')
    })
    it('should output healthy', () => {
        expect(bmi(170,53)).to.be.equal('underweight')
    })
    it('should output healthy', () => {
        expect(bmi(170,73)).to.be.equal('overweight')
    })
    it('should output healthy', () => {
        expect(bmi(170,87)).to.be.equal('obese')
    })
    describe('Invalid params',()=>{
        it('should return -1 for invalid values', () => {
            expect(bmi(170,0)).to.be.equal(-1)
        })
        it('should return -1 for invalid values', () => {
            expect(bmi(0,60)).to.be.equal(-1)
        })
    })

})
