import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useMatch } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../styles/App.css';

function CustomNavbar() {
  const homeIsActive = useMatch('/');
  const sleepIsActive = useMatch('/sleep');
  const releaseIsActive = useMatch('/release');
  const breatheIsActive = useMatch('/breathe');
  const meditateIsActive = useMatch('/meditate');

  return (
    <Navbar className="navbar-bg sticky-nav">
        <Container>
            <Link to="/">
                <Navbar.Brand>
                    <img
                        src={logo}
                        alt="Logo"
                        height="50"
                    />
                </Navbar.Brand>
            </Link>
            <Nav className='nav-pages'>
                <Link to="/" className={`nav-link ${homeIsActive ? 'active' : ''}`}>Home</Link>
                <Link to="/sleep" className={`nav-link ${sleepIsActive ? 'active' : ''}`}>Sleep</Link>
                <Link to="/release" className={`nav-link ${releaseIsActive ? 'active' : ''}`}>Release</Link>
                <Link to="/breathe" className={`nav-link ${breatheIsActive ? 'active' : ''}`}>Breathe</Link>
                <Link to="/meditate" className={`nav-link ${meditateIsActive ? 'active' : ''}`}>Meditate</Link>
            </Nav>
        </Container>
    </Navbar>
  );
}

export default CustomNavbar;