export default [
  { data: { id: "Assigned", label: "Assigned" } },
  { data: { id: "Created", label: "Created" } },
  { data: { id: "Started", label: "Started" } },
  { data: { id: "On Hold", label: "On Hold" } },
  { data: { id: "Completed", label: "Completed" } },
  { data: { id: "Approved", label: "Approved" } },
  { data: { source: "Created", target: "Assigned", label: "assign" } },
  { data: { source: "Assigned", target: "Started", label: "start" } },
  { data: { source: "On Hold", target: "Started", label: "start" } },
  { data: { source: "Started", target: "On Hold", label: "hold" } },
  { data: { source: "Started", target: "Completed", label: "complete" } },
  { data: { source: "Completed", target: "Approved", label: "approve" } }
];
