import React, { useState } from "react";
import "./App.css";

function StudentProfile(props) {
  const studentGrades = props.student.grades;
  const toNumberedGrades = studentGrades.map((grade) => Number(grade));
  const studentGradeAverage =
    toNumberedGrades.reduce((a, b) => a + b, 0) / toNumberedGrades.length;

  const [displayGrades, setDisplayGrades] = useState(false);

  return (
    <div className="student-profile">
      <img
        src={props.student.pic}
        alt="a robot's head"
        className="student-img"
      />
      <div className="student-content">
        <h1 className="student-name">
          {props.student.firstName} {props.student.lastName}
        </h1>
        <p className="student-details">Email: {props.student.email}</p>
        <p className="student-details">Company: {props.student.company}</p>
        <p className="student-details">Skill: {props.student.skill}</p>
        <p className="student-details last-child ">
          Average: {studentGradeAverage}%{" "}
        </p>
        {displayGrades
          ? toNumberedGrades.map((grade, index) => {
              return (
                <p className="grades" key={index}>
                  Test {index + 1}: {grade} %
                </p>
              );
            })
          : null}
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
