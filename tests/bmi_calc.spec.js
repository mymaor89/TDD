const { expect } = require('chai');
const bmiCalc = require('../bmi_calc');

describe('BMI-Calc', () => {
  describe('Valid params', () => {
    it('should return correct value', () => {
      expect(bmiCalc(170, 60)).to.be.closeTo(20.76124567, 0.001);
    });
    it('should return correct value', () => {
      expect(bmiCalc(170, 53)).to.be.closeTo(18.33910035, 0.001);
    });
    it('should return correct value', () => {
      expect(bmiCalc(170, 78)).to.be.closeTo(26.98961938, 0.001);
    });
    it('should return correct value', () => {
      expect(bmiCalc(170, 97)).to.be.closeTo(33.56401384, 0.001);
    });
  });
  describe('Invalid params', () => {
    it('should return undefined for invalid values', () => {
      expect(bmiCalc(170, 0)).to.be.equal(undefined);
    });
    it('should return undefined for invalid values', () => {
      expect(bmiCalc(0, 60)).to.be.equal(undefined);
    });
  });
});
