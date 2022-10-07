//Function to get the appointments for a day. Returns the result in an array
export function getAppointmentsForDay(state, day) {
  let newArray = [];
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
  const interviewer = state.interviewers[interview.interviewer];
  return { ...interview, interviewer };
};

//Function to get the interviewers for a day. The result is returned in an array
export function getInterviewersForDay(state, day) {
  let newArray = [];
  for (let object of state.days) {
    if (object.name === day) {
      for (let interviewer in object.interviewers) {
        if (state.interviewers[interviewer]) {
          newArray.push(state.interviewers[interviewer]);
        }
      }
    }
  }
  return newArray;
}
