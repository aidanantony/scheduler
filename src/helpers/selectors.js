export function getAppointmentsForDay(state, day) {
  let newArray = [];
  console.log("day", day)
  for (let object of state.days) {
    if (object.name === day) {
      for (let appointment of object.appointments) {
        if (state.appointments[appointment]) {
          newArray.push(state.appointments[appointment]);
        }
      }
    }
  }
  return newArray;
}


export function getInterview(state, interview) {
  if (!interview) {
    return null;
  } 
  const interviewer = state.interviewers[interview.interviewer]
  return {...interview, interviewer}
};


export function getInterviewersForDay(state, day) {
  let newArray = [];
  for (let object of state.days) {
    if (object.name === day) {
      for (let interviewer of object.interviewers) {
        if (state.interviewers[interviewer]) {
          newArray.push(state.interviewers[interviewer]);
        }
      }
    }
  }
  return newArray;
}
