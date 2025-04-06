import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>PANCHATANTRA</h1>
    <h5 class="d-none d-lg-block">Admissions Open for the academic year 2025-2026</h5>
    <ul>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/admins">Admins</Link></li>
      <li><Link to="/faculty">Faculty</Link></li>
      <li><Link to="/classes">Classes</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;