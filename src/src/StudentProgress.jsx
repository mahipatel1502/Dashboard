import React from "react";
// import "./App.css";
import "./StudentProgress.css";

const courses = [
  {
    name: "Web Design : From Figma to Web",
    lessons: 73,
    completedLessons: 42,
    assignments: 24,
    completedAssignments: 8,
    tests: 15,
    completedTests: 3,
    progress: 59,
  },
  {
    name: "HTML Basics",
    lessons: 20,
    completedLessons: 12,
    assignments: 10,
    completedAssignments: 6,
    tests: 5,
    completedTests: 2,
    progress: 60,
  },
  {
    name: "Data with Python",
    lessons: 50,
    completedLessons: 25,
    assignments: 15,
    completedAssignments: 5,
    tests: 10,
    completedTests: 3,
    progress: 50,
  },
];

const App = () => {
  return (
    <div className="dashboard">
      <Header />
      <Status courses={courses[0]} />
      <Courses courses={courses} />
    </div>
  );
};

const Header = () => (
  <header className="header">
    <div className="course-title">
      <h1>The Course</h1>
      <progress value="59" max="100"></progress>
    </div>
    <div className="course-stats">
      <span>15 Lessons</span>
      <span>6 Assignments</span>
      <span>3 Tests</span>
      <button className="resume-button">Resume</button>
    </div>
  </header>
);

const Status = ({ courses }) => (
  <section className="status">
    <h2>Status</h2>
    <div className="status-cards">
      <div className="status-card">
        <h3>{courses.completedLessons} Lessons</h3>
        <p>of {courses.lessons} completed</p>
        <div className="circle-progress" data-progress={courses.progress}></div>
      </div>
      <div className="status-card">
        <h3>{courses.completedAssignments} Assignments</h3>
        <p>of {courses.assignments} completed</p>
        <div className="circle-progress" data-progress={courses.progress}></div>
      </div>
      <div className="status-card">
        <h3>{courses.completedTests} Tests</h3>
        <p>of {courses.tests} completed</p>
        <div className="circle-progress" data-progress={courses.progress}></div>
      </div>
    </div>
  </section>
);

const Courses = ({ courses }) => (
  <section className="courses">
    <h2>My Courses</h2>
    <div className="tabs">
      <button className="tab active">Active</button>
      <button className="tab">Completed</button>
    </div>
    <table className="courses-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Course Name</th>
          <th>Completed</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{course.name}</td>
            <td>
              <progress value={course.progress} max="100"></progress>
            </td>
            <td>
              <span>Lessons: {course.completedLessons}</span>
              <span>Assignments: {course.completedAssignments}</span>
              <span>Tests: {course.completedTests}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default App;
