import "./App.scss";
import { rectSortingStrategy } from "@dnd-kit/sortable";
import { MultipleContainers } from "./Sortable/MultipleContainers";
import { useState } from "react";
// import { MultipleContainers } from "./examples/Sortable/MultipleContainers";

export default function App() {
  const items = {
    A: [
      "LeaveBalance",
      "CheckIn",
      // "Attendance",
      "Holiday",
      "Events",
      "Birthday",
      // "WorkinHours",
      "DayStatus",
      // "AcitiviyLog",
      // "MyFolder",
      // "RecentFiles",
      "Applications",
      "Logs",
    ],
    B: [],
  };
  const [editDesign, setEditDesign] = useState(true);

  return (
    <div className="App">
      <MultipleContainers
        itemCount={3}
        strategy={rectSortingStrategy}
        items={items}
        editDesign={editDesign}
        setEditDesign={setEditDesign}
        // vertical
      />
    </div>
  );
}
