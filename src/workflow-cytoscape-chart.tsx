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
    idealEdgeLength: 75,
    // edgeElasticity: 0.1,
    // nodeRepulsion: 10000,
  };

  const cytoscapeStylesheet: Array<cytoscape.Stylesheet> = [
    {
      selector: "node",
      style: {
        "background-color": "#1976d2",
        width: "label",
        height: "label",
        // a single "padding" is not supported in the types
        "padding-top": "4",
        "padding-bottom": "4",
        "padding-left": "4",
        "padding-right": "4",
        // this fixes the text being shifted down on nodes (sadly no fix for edges, but it's not as obvious there without borders)
        "text-margin-y": -3,
        shape: "round-rectangle",
      },
    },
    {
      selector: "node[label]",
      style: {
        label: "data(label)",
        "font-size": "12",
        color: "white",
        "text-halign": "center",
        "text-valign": "center",
      },
    },
    {
      selector: "edge",
      style: {
        "curve-style": "bezier",
        "target-arrow-shape": "triangle",
        width: 1.5,
      },
    },
    {
      selector: "edge[label]",
      style: {
        label: "data(label)",
        "font-size": "12",
        "text-background-color": "white",
        "text-background-opacity": 1,
        "text-background-padding": "2px",
        "text-margin-y": -4,
      },
    },
  ];

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
