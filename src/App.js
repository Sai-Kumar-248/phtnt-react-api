import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavbarComponent/Navbar';
import Home from './pages/HomeComponent/Home';

import Admins from "./pages/AdminComponent/Admins";
import Faculty from "./pages/FacultyComponent/Faculty";
import Contact from "./pages/ContactComponent/Contact";
import Register from './pages/RegisterComponent/Register';
import Classes from './pages/ClassComponent/Classes';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/classes" element={<Classes/>}/>
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
