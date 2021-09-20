import * as React from "react";

const headerArr = [
  "Name (First and Last)",
  "Email",
  "Age",
  "Cell Phone",
  "Gender",
  "City",
  "State"
];

const TableHeaders = () => {
  return (
    <tr>
      {headerArr.map((header, idx) => {
        return <th key={idx}>{header}</th>;
      })}
    </tr>
  );
};

export default TableHeaders;
