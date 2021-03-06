const { expect } = require('chai');
const bmi = require('../bmi');

describe('BMI', () => {
  describe('Valid params', () => {
    it('should output healthy', () => {
      expect(bmi(170, 60)).to.be.equal('healthy');
    });
    it('should output underweight', () => {
      expect(bmi(170, 53)).to.be.equal('underweight');
    });
    it('should output overweight', () => {
      expect(bmi(170, 78)).to.be.equal('overweight');
    });
    it('should output obese', () => {
      expect(bmi(170, 97)).to.be.equal('obese');
    });
  });
  describe('Invalid params', () => {
    it('should return undefined for invalid values', () => {
      expect(bmi(170, 0)).to.be.equal(undefined);
    });
    it('should return undefined for invalid values', () => {
      expect(bmi(0, 60)).to.be.equal(undefined);
    });
  });
});
