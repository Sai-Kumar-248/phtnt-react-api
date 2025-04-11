import React, { useState, useEffect } from 'react';
import './Admins.css';

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  useEffect(() => {
    const sampleAdmins = [
      { id: 1, name: 'Bala Kishan', email: 'balakishan@gmail.com' },
      { id: 2, name: 'Shyamala', email: 'shyamala@school.com' },
    ];
    setAdmins(sampleAdmins);
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
    const updated = admins.map((admin) => {
      if (admin.id === id) {
        const newName = prompt('Enter new name:', admin.name);
        const newEmail = prompt('Enter new email:', admin.email);
        return {
          ...admin,
          name: newName || admin.name,
          email: newEmail || admin.email,
        };
      }
      return admin;
    });
    setAdmins(updated);
  };

  const handleDelete = (id) => {
    if (!isAuthenticated) return triggerLogin();
    const filtered = admins.filter((admin) => admin.id !== id);
    setAdmins(filtered);
  };

  const handleAdd = () => {
    if (!isAuthenticated) return triggerLogin();
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

      <div className="admin-list">
        {admins.map((admin) => (
          <div key={admin.id} className="admin-card">
            <h3>{admin.name}</h3>
            <p><strong>Email:</strong> {admin.email}</p>
            <button className='update-admin-btn ' onClick={() => handleUpdate(admin.id)}>Update</button>
            <button className='delete-admin-btn' onClick={() => handleDelete(admin.id)}>Delete</button>
          </div>
        ))}
      </div>

      <button className="add-admin-btn" onClick={handleAdd}>Add Admin</button>

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

export default Admins;
