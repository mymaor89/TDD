module.exports = function bmiCalc(height_cm, weight_kg)
{
    height = height_cm/100;
    bmi_result = weight_kg/(Math.pow(height,2));
    console.log(bmi_result)
    if (bmi_result > 0 && bmi_result < 40)
      return bmi_result;
   else
      return undefined;
}    