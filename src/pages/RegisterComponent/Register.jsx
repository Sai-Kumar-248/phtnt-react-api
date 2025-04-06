import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    mobile: '',
    email: '',
    curriculum: 'CBSE',
    grade: 'Grade 1',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    alert('Admission form submitted successfully!');
    // TODO: send formData to backend
  };

  return (
    <div className="register-container">
      <h2>🎓 Admissions Open</h2>
      <form onSubmit={handleSubmit}>
        <label>Parent Name</label>
        <input
          type="text"
          name="parentName"
          placeholder="Please enter details"
          value={formData.parentName}
          onChange={handleChange}
          required
        />

        <label>Child Name</label>
        <input
          type="text"
          name="childName"
          placeholder="Please enter details"
          value={formData.childName}
          onChange={handleChange}
          required
        />

        <label>Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          placeholder="Please enter your 10-digit mobile number"
          value={formData.mobile}
          onChange={handleChange}
          maxLength="10"
          pattern="[0-9]{10}"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Please enter details"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Curriculum</label>
        <select
          name="curriculum"
          value={formData.curriculum}
          onChange={handleChange}
        >
          <option value="CBSE">CBSE</option>
          <option value="ICSE">ICSE</option>
          <option value="State Board">State Board</option>
        </select>

        <label>Grade</label>
        <select
          name="grade"
          value={formData.grade}
          onChange={handleChange}
        >
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 2">Grade 2</option>
          <option value="Grade 3">Grade 3</option>
          <option value="Grade 4">Grade 4</option>
          <option value="Grade 5">Grade 5</option>
        </select>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default Register;
