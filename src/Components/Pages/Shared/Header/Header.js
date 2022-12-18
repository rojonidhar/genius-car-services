import { signOut } from 'firebase/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';


function Header() {

  const [user]=useAuthState(auth);


  const handleSignOut=()=>{
    signOut(auth)
  }
  
  
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" >
      <Container >
        <Navbar.Brand className='fs-2 fw-bolder opacity-75 me-50% m-6 ' bg="dark" as={Link} to ="/" >Myhome-Food-Catering</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav >
          <CustomLink  as={Link} to="/home">Home</CustomLink> 
            <CustomLink  as={Link} to="service">Services</CustomLink>
      
            <CustomLink as={Link} to="blogs">Blogs</CustomLink>
            <CustomLink as={Link} to="about">About</CustomLink>
            {
           
           user ?
           <button className='btn btn-link text-black text-decoration-none  fw-bolder opacity-75 ' 
           onClick={handleSignOut}>SignOut</button>
           :
           <CustomLink as={Link} to="login">Login </CustomLink>
          }
            
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;