
const bmiCalc = require('./bmi_calc');

module.exports = function bmi(heightCM, weightKG) {
  const bmiResult = bmiCalc(heightCM, weightKG);

  if (bmiResult > 0 && bmiResult < 18.5) {
    return 'underweight';
  }
  if (bmiResult >= 18.5 && bmiResult < 25) {
    return 'healthy';
  }
  if (bmiResult >= 25 && bmiResult < 30) {
    return 'overweight';
  }
  if (bmiResult >= 30 && bmiResult < 40) {
    return 'obese';
  }
  return undefined;
};
