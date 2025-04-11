import React from 'react';
import './Classes.css';

const Classes = () => {
  const preschoolClasses = ['Nursery', 'LKG', 'UKG'];
  const primaryToHighSchoolClasses = [
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'
  ];

  return (
    <div className="classes-container">
      <h2>📚 Our Classes</h2>

      <div className="class-section">
        <h3>🧒 Pre-School (Nursery to UKG)</h3>
        <div className="class-cards">
          {preschoolClasses.map((cls, index) => (
            <div key={index} className="class-card">{cls}</div>
          ))}
        </div>
      </div>

      <div className="class-section">
        <h3>👩‍🏫 Primary to High School (Grade 1 to 10)</h3>
        <div className="class-cards">
          {primaryToHighSchoolClasses.map((cls, index) => (
            <div key={index} className="class-card">{cls}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
