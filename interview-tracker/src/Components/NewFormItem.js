import React from "react";
const NewFormItem = (props) => {
  return (
    <tr>
      <td>{props.prenume}</td>
      <td>{props.nume}</td>
    </tr>
  );
};
export default NewFormItem;
