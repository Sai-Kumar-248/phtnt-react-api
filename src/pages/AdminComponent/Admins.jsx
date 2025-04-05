import React, { useState, useEffect } from 'react';
import './Admins.css';

const Admins = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    // Simulating fetch from API
    const fetchedAdmins = [
      { id: 1, name: 'Ravi Sharma', email: 'ravi@school.com' },
      { id: 2, name: 'Meera Nair', email: 'meera@school.com' },
      { id: 3, name: 'SaiKumar', email: 'sai@school.com' },
      { id: 4, name: 'Saiteja', email: 'teja@school.com' },
      { id: 5, name: 'Akhil', email: 'akhil@school.com' }
    ];
    setAdmins(fetchedAdmins);
  }, []);

  const handleDelete = (id) => {
    const updatedAdmins = admins.filter(admin => admin.id !== id);
    setAdmins(updatedAdmins);
  };

  const handleUpdate = (id) => {
    const updatedAdmins = admins.map(admin => {
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
        email
      };
      setAdmins([...admins, newAdmin]);
    }
  };

  return (
    <div className="admins-container">
      <h2>👨‍💼 Admins</h2>
      <ul>
        {admins.map(admin => (
          <li key={admin.id} className="admin-card">
            <p><strong>Name:</strong> {admin.name}</p>
            <p><strong>Email:</strong> {admin.email}</p>
            <button onClick={() => handleUpdate(admin.id)}>Update</button>
            <button onClick={() => handleDelete(admin.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button className="add-admin-btn" onClick={handleAddAdmin}>Add Admin</button>
    </div>
  );
};

export default Admins;
