import React, { useState } from 'react';
import "components/InterviewerListItem.scss";
import classNames from 'classnames'


export function InterviewerListItem(props) {


  return (
    <li className="interviewers__item" onCLick={props}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.name}
    </li>
  );
}