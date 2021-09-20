import * as React from "react";

const Prompt1 = () => {
  return (
    <div id="prompt1" hidden>
      <h2>Prompt 1: Fizz Buzz</h2>
      <ul>
        <li>Output numbers from 1 to x.</li>
        <li>If the number is divisible by 3, replace it with “Fizz”.</li>
        <li>If it is divisible by 5, replace it with “Buzz”.</li>
        <li>If it is divisible by 3 and 5 replace it with “FizzBuzz”.</li>
      </ul>
      <h3 className="centered-content">
        Please write your function in the <u>prompt1Answer.js</u> file
      </h3>
    </div>
  );
};

export default Prompt1;
