import React, { useState, useEffect } from 'react';
import './Faculty.css';

const Faculty = () => {
  const [faculties, setFaculties] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  useEffect(() => {
    // Sample data
    const sampleFaculties = [
      { id: 1, name: 'Mr. Ravi Kumar', subject: 'Mathematics' },
      { id: 2, name: 'Ms. Anjali Sharma', subject: 'English' },
      { id: 3, name: 'Mrs. Meena Reddy', subject: 'Science' },
    ];
    setFaculties(sampleFaculties);
  }, []);

  const triggerLogin = () => {
    if (!isAuthenticated) setShowLogin(true);
  };

  const handleLogin = () => {
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
      setShowLogin(false);
    } else {
      alert('Invalid login. Try again!');
    }
  };

  const handleUpdate = (id) => {
    if (!isAuthenticated) return triggerLogin();
    const updated = faculties.map((fac) => {
      if (fac.id === id) {
        const newName = prompt('Enter new name:', fac.name);
        const newSubject = prompt('Enter new subject:', fac.subject);
        return {
          ...fac,
          name: newName || fac.name,
          subject: newSubject || fac.subject,
        };
      }
      return fac;
    });
    setFaculties(updated);
  };

  const handleDelete = (id) => {
    if (!isAuthenticated) return triggerLogin();
    const filtered = faculties.filter((fac) => fac.id !== id);
    setFaculties(filtered);
  };

  const handleAdd = () => {
    if (!isAuthenticated) return triggerLogin();
    const name = prompt('Enter faculty name:');
    const subject = prompt('Enter subject:');
    if (name && subject) {
      const newFac = {
        id: faculties.length ? faculties[faculties.length - 1].id + 1 : 1,
        name,
        subject,
      };
      setFaculties([...faculties, newFac]);
    }
  };

  return (
    <div className="faculty-container">
      <h2>👩‍🏫 Faculty</h2>

      <div className="faculty-list">
        {faculties.map((fac) => (
          <div key={fac.id} className="faculty-card">
            <h3>{fac.name}</h3>
            <p><strong>Subject:</strong> {fac.subject}</p>
            <button className="update-faculty-btn" onClick={() => handleUpdate(fac.id)}>Update</button>
            <button className="delete-faculty-btn" onClick={() => handleDelete(fac.id)}>Delete</button>
          </div>
        ))}
      </div>

      <button className="add-faculty-btn" onClick={handleAdd}>Add Faculty</button>

      {showLogin && (
        <div className="login-popup">
          <h3>🔐 Admin Login</h3>
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Faculty;
