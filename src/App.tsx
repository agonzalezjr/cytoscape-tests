import * as React from "react";
import "./styles.css";
import { WorkflowCytoscapeChart } from "./workflow-cytoscape-chart";

export default function App() {
  return (
    // <div className="App">
    <WorkflowCytoscapeChart elements={cytoscapeElements} />
    // </div>
  );
}
