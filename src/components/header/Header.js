import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faVideoSlash} from "@fortawesome/free-solid-svg-icons"
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container'


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/">
                <FontAwesomeIcon icon={faVideoSlash} /> Movie App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/movies" className="nav-link">Movies</NavLink>
                    <NavLink to="/tv-shows" className="nav-link">TV Shows</NavLink>
                </Nav>
                <Button variant="outline-info">Search</Button>
            </Navbar.Collapse>
        </Container>

    </Navbar>
  )
}

export default Header