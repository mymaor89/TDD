var chai = require('chai')
var expect = require('chai').expect;
var bmiCalc = require('../bmi.calc');
var bmi = require('../bmi');
describe('BMI', () => {
    describe('Valid params',()=>{
        it('should output healthy', () => {
            expect(bmi(bmiCalc(170,60))).to.be.equal('healthy')
        })
        it('should output underweight', () => {
            expect(bmi(bmiCalc(170,53))).to.be.equal('underweight')
        })
        it('should output overweight', () => {
            expect(bmi(bmiCalc(170,78))).to.be.equal('overweight')
        })
        it('should output obese', () => {
            expect(bmi(bmiCalc(170,97))).to.be.equal('obese')
        })
    })
    describe('Invalid params',()=>{
        it('should return -1 for invalid values', () => {
            expect(bmiCalc(170,0)).to.be.equal(-1)
        })
        it('should return -1 for invalid values', () => {
            expect(bmiCalc(0,60)).to.be.equal(-1)
        })
    })

})
