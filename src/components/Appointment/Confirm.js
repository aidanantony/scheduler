import React from "react";
import Button from "components/Button";


//Function to confirm the deletion of an appointment
export default function Confirm(props) {
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">Delete the appointment?</h1>
      <section className="appointment__actions">
        <Button onClick={props.onCancel} danger>Cancel</Button>
        <Button onClick={props.onConfirm} danger>Confirm</Button>
      </section>
    </main>
  );
}