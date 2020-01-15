module.exports = function bmiCalc(height_cm, weight_kg)
{
   height = height_cm/100
   bmi_result = weight_kg/(Math.pow(height,2))

   switch(true) {
    case bmi_result <= 0:
       {
          result = -1
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
   return bmi_result
}    