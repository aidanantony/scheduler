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
  let nullObj = null;
  let newObj;
  if (interview === null) {
    return nullObj;
  } else {
    for (let i in state.interviews) {
      if (interview.interviewer === state.interviewers[i].id) {
        newObj = {
          ...interview,
          interviewer: {
            student: interview.student,
            interviewer: {
              id: interview.interviewer,
              name: state.interviewers.interview.interviewer.name,
              avatar: state.interviews.interview.interviewer.avatar
            }
          }
        };
      }
    }
  }
  return newObj;
};
