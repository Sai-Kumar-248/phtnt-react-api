import React, { useState, useEffect } from 'react';
import './Admins.css';

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  useEffect(() => {
    const fetchedAdmins = [
      { id: 1, name: 'Ravi Sharma', email: 'ravi@school.com' },
      { id: 2, name: 'Meera Nair', email: 'meera@school.com' },
    ];
    setAdmins(fetchedAdmins);
  }, []);

  const handleLogin = () => {
    // Dummy login - replace with API call later
    const validUsername = 'admin';
    const validPassword = 'admin123';

    if (
      credentials.username === validUsername &&
      credentials.password === validPassword
    ) {
      setIsAuthenticated(true);
      setShowLogin(false);
    } else {
      alert('Invalid credentials. Try again!');
    }
  };

  const handleDelete = (id) => {
    const updatedAdmins = admins.filter((admin) => admin.id !== id);
    setAdmins(updatedAdmins);
  };

  const handleUpdate = (id) => {
    const updatedAdmins = admins.map((admin) => {
      if (admin.id === id) {
        const newName = prompt('Enter new name:', admin.name);
        const newEmail = prompt('Enter new email:', admin.email);
        return { ...admin, name: newName || admin.name, email: newEmail || admin.email };
      }
      return admin;
    });
    setAdmins(updatedAdmins);
  };

  const handleAddAdmin = () => {
    const name = prompt('Enter admin name:');
    const email = prompt('Enter admin email:');
    if (name && email) {
      const newAdmin = {
        id: admins.length ? admins[admins.length - 1].id + 1 : 1,
        name,
        email,
      };
      setAdmins([...admins, newAdmin]);
    }
  };

  return (
    <div className="admins-container">
      <h2>👨‍💼 Admins</h2>

      {showLogin && !isAuthenticated && (
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

      {!isAuthenticated && (
        <p>Please sign in to manage admin records.</p>
      )}

      {isAuthenticated && (
        <>
          <ul>
            {admins.map((admin) => (
              <li key={admin.id} className="admin-card">
                <p><strong>Name:</strong> {admin.name}</p>
                <p><strong>Email:</strong> {admin.email}</p>
                <button className="admin-update-btn" onClick={() => handleUpdate(admin.id)}>Update</button>
                <button className="admin-delete-btn" onClick={() => handleDelete(admin.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <button className="add-admin-btn" onClick={handleAddAdmin}>Add Admin</button>
        </>
      )}
    </div>
  );
};

export default Admins;
