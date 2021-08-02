import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="./styles/images/Resume.pdf"
            download
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://www.linkedin.com/in/jos%C3%A9-daniel-r-a7063415a"

          onClick={() => handlePageChange('https://www.linkedin.com/in/jos%C3%A9-daniel-r-a7063415a')}
          className={currentPage === 'https://www.linkedin.com/in/jos%C3%A9-daniel-r-a7063415a' ? 'nav-link active' : 'nav-link'}
        >
          LinkedIn
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portafolio"
          onClick={() => handlePageChange('Portafolio')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'Portafolio' ? 'nav-link active' : 'nav-link'}
        >
          Portafolio
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;