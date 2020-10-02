export default [
  // nodes
  { data: { id: "Assigned", label: "Assigned" }, selectable: true },
  { data: { id: "Created", label: "Created" }, selectable: true },
  { data: { id: "Started", label: "Started" }, selectable: true },
  { data: { id: "On Hold", label: "On Hold" }, selectable: true },
  { data: { id: "Completed", label: "Completed" }, selectable: true },
  { data: { id: "Approved", label: "Approved" }, selectable: true },
  // edges
  { data: { source: "Created", target: "Assigned", label: "assign" } },
  { data: { source: "Assigned", target: "Started", label: "start" } },
  { data: { source: "On Hold", target: "Started", label: "start" } },
  { data: { source: "Started", target: "On Hold", label: "hold" } },
  { data: { source: "Started", target: "Completed", label: "complete" } },
  { data: { source: "Completed", target: "Approved", label: "approve" } },
];
