import React, { useState } from 'react';
import "components/InterviewerListItem.scss";
import classNames from 'classnames'


export function InterviewerListItem(props) {

  const interviewerListItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });
  
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