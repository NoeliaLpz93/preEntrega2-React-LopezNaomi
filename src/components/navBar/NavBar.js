// ------------ IMPORT ------------
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/CartWidget';
import SearchItems from '../searchItems/SearchItems';
import { LinkContainer } from 'react-router-bootstrap';

// ------------ LOGIC -------------
function NavBar(props) {
  const cantidadCarrito = 1; // hardcoded 
  // return to renderize
  return (
    <Navbar bg="danger" variant="dark" expand="lg" >
      <Container fluid className='align-items-end'>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <div className='usr-logo'>LuxurySport</div>
            <div className='usr-logo--sub'>Indumentaria Deportiva</div>
          </Navbar.Brand>
        </LinkContainer>
        <Nav className='container-fluid'>
          <SearchItems />
        </Nav>
        <Nav>
          <CartWidget length={cantidadCarrito} />
        </Nav>
      </Container>
    </Navbar >
  )
}

// ------------ EXPORT ------------
export default NavBar