
export default function Header({ currentPage, handlePageChange }) {
  return (
    <nav id="navContainer">
      <div class="navbar-start" id="navLinks">
      <div class="navbar-item" id="myName">Frank Romero
          </div>
        <a class="navbar-item" id= {currentPage === 'AboutMe' ? 'sectionLinkActive' : 'sectionLink'} 
        onClick={() => handlePageChange('AboutMe')} name="aboutMe">
          About Me
        </a>
        <a class="navbar-item" id= {currentPage === 'Portfolio' ? 'sectionLinkActive' : 'sectionLink'} 
        onClick={() => handlePageChange('Portfolio')}>
          Portfolio
        </a>
        <a class="navbar-item" id= {currentPage === 'Resume' ? 'sectionLinkActive' : 'sectionLink'} 
        onClick={() => handlePageChange('Resume')}>
          Resume
        </a>
        <a class="navbar-item" id= {currentPage === 'Contact' ? 'sectionLinkActive' : 'sectionLink'}  
        onClick={() => handlePageChange('Contact')}>
          Contact Me
        </a>
      </div>
  
         
    </nav>
  );
}
