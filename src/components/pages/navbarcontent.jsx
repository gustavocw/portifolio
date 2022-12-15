import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/navbar.sass'


const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/certificates">Certificates</Link>
  </nav>
);

export default Navbar;