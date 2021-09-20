import * as React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const Table = () => {
  const [apiData, setApiData] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://randomuser.me/api/?page=1&results=50&inc=name,email,dob,cell,gender,location"
    )
      .then((response) => response.json())
      .then((data) => setApiData(data.results));
  }, []);

  console.log(apiData);

  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {apiData.length > 0 &&
          apiData.map((user, idx) => {
            return <TableRow user={user} key={idx} />;
          })}
      </tbody>
    </table>
  );
};

export default Table;
