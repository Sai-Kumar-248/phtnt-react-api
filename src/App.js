import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent/Navbar";

import Home from "./pages/HomeComponent/Home";
import Admins from "./pages/AdminComponent/Admins";
import Faculty from "./pages/FacultyComponent/Faculty";
import Contact from "./pages/ContactComponent/Contact";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
