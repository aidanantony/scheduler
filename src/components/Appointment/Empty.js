import { process_params } from 'express/lib/router';
import React, { useState } from 'react';

export default function Empty() {
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
}