import React from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';
import useVisualMode from 'hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true));
  }

  function cancel() {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
  }
  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />

      {mode === CONFIRM && (
        <Confirm message={'Are you sure you want to delete?'}
        onCancel={back}
        onConfirm={cancel}
        />
        )}


      {mode === SHOW && (
        <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer && props.interview.interviewer.name}
        onDelete={() => transition(CONFIRM)}
        onEdit={() => transition(EDIT)}
        />
        )}

      {mode === CREATE && (
        <Form
        interviewers={props.interviewers}
        onCancel={back}
        onSave={save}
        />
        )}

      {mode === EDIT && (
        <Form
        onCancel={back}
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
        interviewers={props.interviewers}
        onSave={(name, interviewer) => save(name, interviewer)}
        />
        )}

      {mode === ERROR_SAVE && (
        <Error
        message={'Error creating appointment'}
        onClose={back}
        />
        )}

      {mode === ERROR_DELETE && (
        <Error
        message={'Error deleting appointment'}
        onClose={back}
        />
        )}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message={'Saving'} />}
      {mode === DELETING && <Status message={'Deleting'} />}
    </article>
  );
}