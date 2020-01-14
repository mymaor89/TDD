
module.exports = function bmi(height_cm, weight_kg)
{
   height = height_cm/100;
   bmi_result = weight_kg/(Math.pow(height,2))
   switch(true) {
      case bmi_result <= 0:
         {
            result = -1
            break;
         }
      case bmi_result < 18.5:
         {
            result = "underweight"
            break;
         }
      case  bmi_result < 25:
         {
            result = "healthy"
            break;
         }
      case bmi_result < 30:
         {
            result = "overweight"
            break;
         }
      case bmi_result < 40:
         {
            result = "obese"
            break;
         }
      case 40 > bmi_result:
         {
            result = -1
            break;
         }
      default:
         {
            result = -1
         }
      }
   return result;
}


