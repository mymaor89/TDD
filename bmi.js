
const bmi_calc = require('./bmi.calc')
module.exports = function bmi(height_cm, weight_kg)
{
   bmi_result = bmi_calc(height_cm,weight_kg);
   switch(true) {
      case bmi_result <= 0:
         {
            result = undefined;
            break;
         }
      case bmi_result < 18.5:
         {
            result = "underweight";
            break;
         }
      case  bmi_result < 25:
         {
            result = "healthy";
            break;
         }
      case bmi_result < 30:
         {
            result = "overweight";
            break;
         }
      case bmi_result < 40:
         {
            result = "obese";
            break;
         }
      case 40 > bmi_result:
         {
            result = undefined;
            break;
         }
      default:
         {
            result = undefined;
         }
      }
   return result;
}


