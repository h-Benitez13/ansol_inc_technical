import "./styles/styles.css";
import { showDescription, show1, show2, show3 } from "./setup/utilityFunctions";
import Description from "./setup/description";
import Prompt1 from "./setup/prompt1";
import Prompt2 from "./setup/prompt2";
import Prompt3 from "./setup/prompt3";

import Table from "./components/Table/index";

export default function App() {
  return (
    <div className="App">
      <h1>ANSOL, Inc. Code Test</h1>
      <h3 className="centered-content">
        <u>
          Please do not reload the window, but only refresh the browser in this
          code sandbox
        </u>
      </h3>
      <div className="centered-content">
        <button onClick={showDescription}>Description</button>
        <button onClick={show1}>Prompt 1</button>
        <button onClick={show2}>Prompt 2</button>
        <button onClick={show3}>Prompt 3</button>
      </div>
      <Description></Description>
      <Prompt1></Prompt1>
      <Prompt2></Prompt2>
      <Prompt3></Prompt3>
      <h1>Well look-y here, we have a Table </h1>
      <Table />
    </div>
  );
}
