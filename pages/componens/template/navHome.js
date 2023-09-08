import { Button, NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "/styles/Navbar.module.css"
import NextLink from 'next/link';
import { useContext, useEffect, useState } from 'react';
const navBar = () =>{
  const [stickyClass, setStickyClass] = useState('position-relative');
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);
  

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setStickyClass('position-fixed ') : setStickyClass('position-relative');
    }
  };

 
      return (
        <>
            <Navbar id='navbar'
              className={
                
                  styles.navbar 
                  +" align-items-center "
                  +stickyClass
                
                } expand="md">
              <Container>
                <NavbarToggle aria-controls='basic-navbar-nav' />
                <NavbarBrand href="/" title='Back'><img className="logo" src="/favicon.ico" alt='favicon' title='favicon'></img></NavbarBrand>
                <div className='text-dark'></div>
                <Navbar.Collapse className=""  id='basic-navbar-nav'>
                  <Nav className=' justify-content-center text-dark bg-lightgreen'>
                    <Nav.Link className={styles.link + " rounded"} href="#home" title='Home'>Home</Nav.Link>
                    <Nav.Link className={styles.link + " rounded"} href="#proyectos" title='Proyectos'>Proyectos</Nav.Link>
                    <Nav.Link className={styles.link + " rounded"} href="#nosotros" title='Nosotros'>Nosotros</Nav.Link>                 
                    <Nav.Link className={styles.link + " rounded"} href="#servicios" title='Servicios'>Servicios</Nav.Link>
                    <Nav.Link className={styles.link + " rounded"} href="#clientes" title='Clientes'>Clientes</Nav.Link>
                    <Nav.Link className={styles.link + " rounded"} href="#precios" title='Precios'>Precios</Nav.Link>
                    <Nav.Link className={styles.link + " rounded"} href="#contacto" title='Contacto'>Contactanos</Nav.Link>                  
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </>
      );
}


export default navBar;