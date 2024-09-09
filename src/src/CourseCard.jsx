import React from 'react';

const CourseCard = ({ title, description, image, buttonText }) => {
  return (
    <div className="course-card">
      {/* <img src={image} alt={title} className="course-image" /> */}
      <div className="course-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="start-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default CourseCard;
