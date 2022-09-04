export function getAppointmentsForDay(state,day) {
  let newArray = [];
  for (let object of state.days) {
    if (object.name === day) {
      for (let appointment of object.appointments) {
        if (state.appointments[appointment]){
          newArray.push(state.appointments[appointment])
        }
      }
    }
  }
  return newArray
}



