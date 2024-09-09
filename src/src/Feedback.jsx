import React, { useState } from 'react';
import './Feedback.css';

const FeedbackForm = () => {
  // Set up state for each input field
  const [formData, setFormData] = useState({
    companyName: '',
    overallRating: 0,
    employmentStatus: 'current',
    company: '',
    jobTitle: '',
    reviewHeadline: '',
    pros: '',
    cons: '',
    agreeToTerms: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle star rating selection
  const handleRating = (rating) => {
    setFormData({ ...formData, overallRating: rating });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Feedback submitted successfully!');
    console.log('Form submitted', formData);
    setFormData({
      companyName: '',
      overallRating: 0,
      employmentStatus: 'current',
      company: '',
      jobTitle: '',
      reviewHeadline: '',
      pros: '',
      cons: '',
      agreeToTerms: false,
    });
  } else {
    alert(result.message || 'Failed to submit feedback');
  }
} catch (error) {
  console.error('Error submitting feedback:', error);
  alert('Failed to connect to the server. Please try again later.');
}
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Rate This WebSite</h2>
      <p>It only takes a minute! Your anonymous review will help other students.</p>
      
      {/* <label>Company</label>
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
      /> */}

      

      {/* <label>Are you a current or former employee?</label>
      <div className="employment-status">
        <input
          type="radio"
          id="current"
          name="employmentStatus"
          value="current"
          checked={formData.employmentStatus === 'current'}
          onChange={handleChange}
        />
        <label htmlFor="current">Current</label>
        <input
          type="radio"
          id="former"
          name="employmentStatus"
          value="former"
          checked={formData.employmentStatus === 'former'}
          onChange={handleChange}
        />
        <label htmlFor="former">Former</label>
      </div>

      <label>Company</label>
      <select
        name="company"
        value={formData.company}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="company1">Company 1</option>
        <option value="company2">Company 2</option>
      </select>

      <label>Your Job Title</label>
      <input
        type="text"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
      /> */}

      <label>Review Headline*</label>
      <input
        type="text"
        name="reviewHeadline"
        value={formData.reviewHeadline}
        onChange={handleChange}
      />

      <label>Pros*</label>
      <textarea
        name="pros"
        value={formData.pros}
        onChange={handleChange}
        placeholder="Share some of the best reasons to work"
        rows={3}
      ></textarea>

      <label>Cons*</label>
      <textarea
        name="cons"
        value={formData.cons}
        onChange={handleChange}
        placeholder="Share some of the downsides of working"
        rows={3}
      ></textarea>

<label>Overall Rating*</label>
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${formData.overallRating >= star ? 'filled' : ''}`}
            onClick={() => handleRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      <div className="checkbox">
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
        <label>
          I agree to Terms of Use. This review of my experience is truthful.
        </label>
      </div>

      <button type="submit" disabled={!formData.agreeToTerms}>
        Submit Review
      </button>
    </form>
  );
};

export default FeedbackForm;
