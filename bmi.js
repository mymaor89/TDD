
const bmi_calc = require('./bmi.calc')
module.exports = function bmi(height_cm, weight_kg)
{
   bmi_result = bmi_calc(height_cm,weight_kg);
   
   if (bmi_result == undefined){
      return bmi_result;
   }
   else if (0 < bmi_result && bmi_result < 18.5){
      return "underweight";
   }
   else if (18.5 <=  bmi_result && bmi_result < 25){
      return "healthy";
   }
   else if (25 <= bmi_result && bmi_result < 30){
      return "overweight";
   }
   else if (30 <= bmi_result && bmi_result < 40){
      return "obese";
   }
   else if (40 < bmi_result){
      return undefined;
   }
}


