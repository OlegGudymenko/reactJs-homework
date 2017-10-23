import React, { Component } from 'react';

const BtnIcon = (props) => {
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
    case 'save':
      btnClass = 'glyphicon-ok'
        break;
    default:
  }
  return(
    <button type="button" className={`btn btn-default ${props.className}`} onClick={props.action}>
      <span className={ `glyphicon ${btnClass}` }></span>
    </button>
  )
};

export default BtnIcon;
