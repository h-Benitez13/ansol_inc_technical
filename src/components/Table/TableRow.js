import * as React from "react";
import {
  displayUserAge,
  displayUserCity,
  displayUserName,
  displayUserState
} from "./utils";

const TableRow = ({ user }) => {
  return (
    <tr>
      <td>{displayUserName(user)}</td>
      <td>{user.email}</td>
      <td>{displayUserAge(user)}</td>
      <td>{user.cell}</td>
      <td>{user.gender}</td>
      <td>{displayUserCity(user)}</td>
      <td>{displayUserState(user)}</td>
    </tr>
  );
};

export default TableRow;
