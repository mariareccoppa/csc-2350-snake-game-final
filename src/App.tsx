import "./styles.css";
import { useEffect } from "react";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import IWorldView from "./IWorldView";
import CanvasWorldView from "./CanvasWorldView";
import display from "./display";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
