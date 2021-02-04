import "./App.css";
import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import StudentList from "./components/StudentList";

function App() {
  const apiURL = "https://api.hatchways.io/assessment/students";
  const [students, setStudents] = useState([]);
  const [inputName, setInputName] = useState("");

  function search(students) {
    return students.filter(
      (students) =>
        students.firstName.toLowerCase().indexOf(inputName) > -1 ||
        students.lastName.toLowerCase().indexOf(inputName) > -1
    );
  }

  useEffect(() => {
    loadData();
  }, [students]);

  const loadData = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    setStudents(data.students);
  };

  return (
    <div className="App">
      <SearchForm
        students={students}
        setStudents={setStudents}
        inputName={inputName}
        setInputName={setInputName}
      />
      <StudentList students={search(students)} />
    </div>
  );
}

export default App;
