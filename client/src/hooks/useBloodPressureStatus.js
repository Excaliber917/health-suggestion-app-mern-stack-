export const useBloodPressure = (bloodPressure)=>{
    if(!bloodPressure || bloodPressure<0)
        return 'no result'
    if (bloodPressure < 90) {
        return 'Low Blood Pressure';
      } else if (bloodPressure > 140) {
        return 'High Blood Pressure';
      } else {
        return 'Normal Blood Pressure';
      }
}