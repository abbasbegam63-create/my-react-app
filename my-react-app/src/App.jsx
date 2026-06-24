import React, { useState } from "react";

function App() {
  const [assignments, setAssignments] = useState([]);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("Pending");

  const addAssignment = () => {
    if (!title || !subject) {
      alert("Enter all fields");
      return;
    }

    const newAssignment = {
      id: Date.now(),
      title,
      subject,
      status,
    };

    setAssignments([...assignments, newAssignment]);
    setTitle("");
    setSubject("");
    setStatus("Pending");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>College Assignment Submission Tracker</h1>

      <input
        type="text"
        placeholder="Assignment Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <br /><br />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>Submitted</option>
        <option>Late</option>
      </select>

      <br /><br />

      <button onClick={addAssignment}>
        Add Assignment
      </button>

      <hr />

      <h2>Assignment List</h2>

      <ul>
        {assignments.map((item) => (
          <li key={item.id}>
            <b>{item.title}</b> | {item.subject} |
            <span> {item.status}</span>
          </li>
        ))}
      </ul>

      <h2>Dashboard Summary</h2>
      <p>
        Total Assignments: {assignments.length}
      </p>
      <p>
        Submitted: {
          assignments.filter(
            (a) => a.status === "Submitted"
          ).length
        }
      </p>
      <p>
        Pending: {
          assignments.filter(
            (a) => a.status === "Pending"
          ).length
        }
      </p>
      <p>
        Late: {
          assignments.filter(
            (a) => a.status === "Late"
          ).length
        }
      </p>
    </div>
  );
}

export default App;