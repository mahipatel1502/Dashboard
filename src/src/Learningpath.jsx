import React from 'react';
import CourseCard from './CourseCard';  // Assume this file is saved as CourseCard.jsx
import "./Learningpath.css"

const CoursesPage = () => {
  const courses = [
    {
      title: 'Python Tutorials - 100 Days of Code',
      description: 'Python is one of the most demanded programming languages in the job market. Let\'s commit our 100 days of code to python!',
    // image: 'path-to-python-image',
      buttonText: 'Start Watching',
    },
    {
      title: 'Ultimate JavaScript Course',
      description: 'This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. Enroll Now!',
    //   image: 'path-to-javascript-image',
      buttonText: 'Start Watching',
    },
    {
      title: 'React JS Tutorials For Beginners',
      description: 'This series will cover React from start to end. Learn React from the ground up!',
    //   image: 'path-to-react-image',
      buttonText: 'Start Watching',
    },
  ];

  return (
    <div className="courses-page">
      <div className="courses-list">
        <div className="create-card">
          <button className="create-button">+ Create</button>
        </div>
        {courses.map((course, index) => (
          <CourseCard 
            key={index}
            title={course.title}
            description={course.description}
            // image={course.image}
            buttonText={course.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
