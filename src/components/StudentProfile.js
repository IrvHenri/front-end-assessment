import React, { useState } from "react";
import "../App.css";

function StudentProfile({ student }) {
  const studentGrades = student.grades;
  const toNumberedGrades = studentGrades.map((grade) => Number(grade));
  const studentGradeAverage =
    toNumberedGrades.reduce((a, b) => a + b, 0) / toNumberedGrades.length;

  const [displayGrades, setDisplayGrades] = useState(false);

  const [tags, setTags] = useState([]);

  function addTags(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  }

  return (
    <div className="student-profile-container">
      <img src={student.pic} alt="a robot's profile" className="student-img" />
      <div className="student-content">
        <h1 className="student-name">
          {student.firstName} {student.lastName}
        </h1>
        <p className="student-details">Email: {student.email}</p>
        <p className="student-details">Company: {student.company}</p>
        <p className="student-details">Skill: {student.skill}</p>
        <p className="student-details last-child ">
          Average: {studentGradeAverage}%
        </p>
        {displayGrades
          ? toNumberedGrades.map((grade, index) => {
              return (
                <p className="grades" key={index}>
                  Test {index + 1}: {grade}%
                </p>
              );
            })
          : null}

        <ul className="tag-list">
          {tags.map((tag, index) => (
            <li className="tag-item" key={index}>
              <span>{tag}</span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onKeyUp={(e) => addTags(e)}
          placeholder="Add a tag"
          className="tag-input"
        />
      </div>

      <button className="btn" onClick={() => setDisplayGrades(!displayGrades)}>
        {displayGrades ? (
          <i className="fas fa-minus"></i>
        ) : (
          <i className="fas fa-plus"></i>
        )}
      </button>
    </div>
  );
}

export default StudentProfile;
