import React from "react";
import "../App.css";
import StudentProfile from "./StudentProfile";

function StudentList({ students }) {
  return (
    <div>
      <section className="student-list">
        {students.map((student) => (
          <StudentProfile
            student={student}
            key={student.id}
            students={students}
          />
        ))}
      </section>
    </div>
  );
}

export default StudentList;
