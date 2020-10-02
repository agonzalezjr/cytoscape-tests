import React, { ReactElement } from "react";
import Cytoscape from "cytoscape";
import COSEBilkent from "cytoscape-cose-bilkent";
import CytoscapeComponent from "react-cytoscapejs";

Cytoscape.use(COSEBilkent);

export const WorkflowCytoscapeChart = (props: any): ReactElement => {
  const layout = {
    name: "cose-bilkent",
    // other options
    padding: 50,
    nodeDimensionsIncludeLabels: true,
    // idealEdgeLength: 100,
    edgeElasticity: 0.1
    // nodeRepulsion: 8500,
  };

  const cytoscapeStylesheet = [
    {
      selector: "node",
      style: {
        "background-color": "#43447a",
        width: "label",
        height: "label",
        padding: "6px",
        shape: "round-rectangle"
      }
    },
    {
      selector: "node[label]",
      style: {
        label: "data(label)",
        "font-size": "12",
        color: "white",
        "text-halign": "center",
        "text-valign": "center"
      }
    },
    {
      selector: "edge",
      style: {
        "curve-style": "bezier",
        "target-arrow-shape": "triangle",
        width: 1.5
      }
    },
    {
      selector: "edge[label]",
      style: {
        label: "data(label)",
        "font-size": "12",

        "text-background-color": "white",
        "text-background-opacity": 1,
        "text-background-padding": "2px",

        "text-border-color": "black",
        "text-border-style": "solid",
        "text-border-width": 0.5,
        "text-border-opacity": 1

        // "text-rotation": "autorotate"
      }
    }
  ] as Array<cytoscape.Stylesheet>;

  return (
    <CytoscapeComponent
      cy={(cy): void => {
        cy.on("select", (_x) => {
          console.log("something was selected here");
        });
      }}
      elements={props.elements}
      layout={layout}
      style={{ top: 0, bottom: 0, position: "absolute", width: "100%" }}
      stylesheet={cytoscapeStylesheet}
    />
  );
};
