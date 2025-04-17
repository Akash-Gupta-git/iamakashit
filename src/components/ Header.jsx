import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';

import ThemeToggle from './ThemeToggle';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}>
      <Navbar expand="lg" className="shadow-sm fixed-top" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"}>
        <Container>
          <Navbar.Brand href="#" className='highlight'>Akash Gupta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((section, index) => (
                <ScrollLink
                  key={index}
                  className="nav-link"
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  activeClass="active"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              ))}
              <ThemeToggle darkMode={darkMode} onToggle={setDarkMode} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


     
    </header>
  );
}

export default Header;
