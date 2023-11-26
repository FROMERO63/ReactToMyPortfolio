
export default function Header({ currentPage, handlePageChange }) {
  return (
    <nav id="navContainer">
        <div class="navbar-item" id="myName">Frank Romero
          <div>
          <nav className="navbarContainer">
      <div class="navbar-start" id="navLinks">
        <a class="navbar-item" id= "aboutMeLink" onClick={() => handlePageChange('AboutMe')} name="aboutMe">
          About Me
        </a>
        <a class="navbar-item" id= "portfolioLink" onClick={() => handlePageChange('Portfolio')}>
          Portfolio
        </a>
        <a class="navbar-item" id= "resumeLink" onClick={() => handlePageChange('Resume')}>
          Resume
        </a>
        <a class="navbar-item" id= "contactMeLink" onClick={() => handlePageChange('Contact')}>
          Contact Me
        </a>
      </div>
    </nav>
          </div>
        </div>
    </nav>
  );
}
