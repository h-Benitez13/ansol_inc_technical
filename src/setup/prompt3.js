import * as React from "react";

const Prompt3 = () => {
  return (
    <div id="prompt3" hidden>
      <h2>Prompt 3: React/JavaScript Exercise Next Steps</h2>
      <h3>Adding a Modal</h3>
      <ul>
        <li>
          Create a function to have a modal trigger when targeting a particular
          row from the Users table created in Prompt 2
        </li>
        <li>Display</li>
        <ul>
          <li>Name (First and Last)</li>
          <li>Email</li>
        </ul>
        <li>
          Bonus: Allow editing and saving of the email field that will update on
          the table when submitted
        </li>
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

export default Prompt3;
