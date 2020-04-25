import React from "react";
const Candidate = (props) => {
  return (
    <tr>
      <td>{props.fN}</td>
      <td>{props.lN}</td>
      <td> {props.mail}</td>
      <td>{props.tel}</td>
      <td>{props.currentTitle}</td>
      <td> {props.currentAng}</td>
      <td> {props.hireDate}</td>
    </tr>
  );
};
export default Candidate;
