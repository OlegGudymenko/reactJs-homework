import React, { Component } from 'react';

export  const BtnIcon = (props) => {
  let btnClass ;
  switch(props.type) {
    case 'edit':
      btnClass = 'glyphicon-pencil'
        break;
    case 'add':
      btnClass = 'glyphicon-plus'
        break;
    case 'remove':
      btnClass = 'glyphicon-remove'
        break;
    default:
  }
  return(
    <button type="button" className={`btn btn-default ${props.className}`} onClick={props.action}>
      <span className={ `glyphicon ${btnClass}` }></span>
    </button>
  )
};

// BtnIcon ;
