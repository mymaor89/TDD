var chai = require('chai')
var expect = require('chai').expect;
var bmi_calc = require('../bmi_calc');
describe('BMI-Calc', () => {
    describe('Valid params',()=>{
        it('should return correct value', () => {
            expect(bmi_calc(170,60)).to.be.closeTo(20.76124567, 0.001)
        })
        it('should output underweight', () => {
            expect(bmi_calc(170,53)).to.be.closeTo(18.33910035, 0.001)
        })
        it('should output overweight', () => {
            expect(bmi_calc(170,78)).to.be.closeTo(26.98961938, 0.001)
        })
        it('should output obese', () => {
            expect(bmi_calc(170,97)).to.be.closeTo(33.56401384, 0.001)
        })
    })
    describe('Invalid params',()=>{
        it('should return undefined for invalid values', () => {
            expect(bmi_calc(170,0)).to.be.equal(undefined)
        })
        it('should return undefined for invalid values', () => {
            expect(bmi_calc(0,60)).to.be.equal(undefined)
        })
    })})