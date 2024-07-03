import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h1>Mario Salinas</h1>
      <ul className="relative flex items-center justify-center
                      text-white">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;