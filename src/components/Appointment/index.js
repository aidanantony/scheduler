import React, { Fragment } from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import useVisualMode from 'hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM ="CONFIRM";
const EDIT = "EDIT";


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    }
    transition(SAVING)
    props.bookInterview(props.id, interview)
    transition(SHOW)
  }

  function cancel() {
    transition(CONFIRM)
    props.cancelInterview(props.id)
    transition(EMPTY)
  }
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message={'Saving'} />}
      {mode === DELETE && <Status message={'Deleting'} />}
      {mode === CONFIRM && (
        <Confirm message={'Are you sure you want to delete?'}
        onCancel={() => back()}
        onConfirm={cancel}
        />
      )}


      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer.name}
          onDelete={cancel}
          onEdit = {() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form
        interviewers = {props.interviewers}
        onCancel = {()=> back()}
        onSave = {save}
        />
      )}
      {mode === EDIT && (
        <Form 
        onCancel = {() => back()}
        name = {props.interview.student}
        interviewer = {props.interview.interviewer.id}
        interviewers = {props.interviewers}
        onSave = {(name, interviewer) => save(name, interviewer)}
        />
      )}
    </article>
  );
}