import {useState, useEffect} from 'react';
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState({
      ...state,
      appointments
    });
    return axios.put(`/api/appointments/${id}`, appointment)
    .then((res) => {
      setState({
        ...state,
        appointments,
        days: updateSpots(state, appointments)
    })
  })
}

function findDay(day) {
  const days = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4
  }
  return days[day]
}


  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState({
      ...state,
      appointments
    })
    const interviewDay = findDay(state.day)
    const day = {
      ...state.days[interviewDay],
      spots: state.days[interviewDay].spots + 1
    }

    let days = state.days
    days[interviewDay] = day;

    return axios.delete(`/api/appointments/${id}`, appointment)
    .then(res => {
      setState({ ...state, appointments, days: updateSpots(state, appointments) })
        return res
    })
  }




  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    });
  }, []);

  function updateSpots(state, appointments) {
    return state.days.map((elem) => {
      if (elem.name === state.day) {
        return {
          ...elem,
          spots: elem.appointments
            .map((appointment) => appointments[appointment])
            .filter(({ interview }) => !interview).length
        };
      }

      return elem;
    });
  }


  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
};