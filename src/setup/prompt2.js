import * as React from "react";

const Prompt2 = () => {
  return (
    <div id="prompt2" hidden>
      <h2>Prompt 2: React/JavaScript Exercise</h2>
      <h3>Task List</h3>
      <ul>
        <li>
          Retreive 50 users from the publicly available{" "}
          <a href="https://randomuser.me" target="blank">
            https://randomuser.me
          </a>{" "}
          &nbsp; API.
        </li>
        <li>
          Using those 50 users, create a table view component for those 50 users
          with the following headers:
        </li>
        <ul>
          <li>Name (First and Last)</li>
          <li>Email</li>
          <li>Age</li>
          <li>Cell Phone</li>
          <li>Gender</li>
          <li>City</li>
          <li>State</li>
        </ul>
      </ul>
      <h3 className="centered-content">
        For your reference, here is the file structure
      </h3>
      <h3>Project Structure:</h3>
      <ul>
        <li>
          <strong>src/components/</strong> - This is where all of your
          components will go. A Table component has been created for you already
          to start with.
        </li>
        <li>
          <strong>src/styles/</strong> - This is where you can put your CSS
          Styles.{" "}
        </li>
      </ul>
    </div>
  );
};

export default Prompt2;
