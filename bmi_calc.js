module.exports = function bmiCalc(heightCM, weightKG) {
  const height = heightCM / 100;
  const bmiResult = weightKG / height ** 2;
  if (bmiResult > 0 && bmiResult < 40) return bmiResult;
  return undefined;
};
