import "./App.css";
import React, { useState, useEffect } from "react";
import StudentList from "./StudentList";

function App() {
  const apiURL = "https://api.hatchways.io/assessment/students";
  const [students, setStudents] = useState([]);
  const [nameSearch, setName] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    setStudents(data.students);
  };

  function search(rows) {
    return rows.filter(
      (row) =>
        row.firstName.toLowerCase().indexOf(nameSearch) > -1 ||
        row.lastName.toLowerCase().indexOf(nameSearch) > -1
    );
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search by name"
        className="search-field"
        value={nameSearch}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by tag"
        className="search-field"
        value={nameSearch}
        onChange={(e) => setName(e.target.value)}
      />

      <StudentList students={search(students)} />
    </div>
  );
}

export default App;
