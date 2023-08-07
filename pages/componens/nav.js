import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../../styles/Navbar.module.css"
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const navBar = () =>{
  const [scrollDirection, setScrollDirection] = useState("none");
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      const newScrollTop = window.scrollY;
      if (newScrollTop<10){
        setScrollDirection("top")
  
      }
      if (newScrollTop > scrollTop) {
        setScrollDirection("down");
      
      } else 
      setScrollTop(newScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);
      return (
        <>
            <Navbar 
              className={
                `
                  ${styles.navbar}
                  ${scrollDirection === "down" ? styles.scrollDown : ""}
                  ${scrollDirection === "up" ? styles.scrollUp : ""}
                  ${scrollDirection === "top" ? styles.scrollTop : ""}

                `
                } expand="md">
              <Container>
                <NavbarToggle aria-controls='basic-navbar-nav' />
                <NavbarBrand href="/"><img className="logo" src="/favicon.ico"></img></NavbarBrand>
                <div className='text-dark'></div>
                <Navbar.Collapse className="justify-content-end"  id='basic-navbar-nav'>
                  <Nav className='text-dark bg-lightgreen'>
                    
                    <Link 
                      className={styles.link+' nav-link rounded'}
                      to='home'
                      smooth={true}
                    >Home</Link>
                    
                    <Link 
                      className={styles.link+' nav-link rounded'}
                      to='proyectos'
                      smooth={true}
                    >Proyectos</Link>
                    <Link 
                      className={styles.link+' nav-link rounded'}
                      to='nosotros'
                      smooth={true}
                    >Nosotros</Link>
                    <Link 
                      className={styles.link+' nav-link rounded'}
                      to='servicios'
                      smooth={true}
                    >Servicios</Link>
                    <Link 
                      className={styles.link+' nav-link rounded'}
                      to='clientes'
                      smooth={true}
                    >Clientes</Link>
                    <Link 
                      className={styles.link+' nav-link rounded'}
                      to='precios'
                      smooth={true}
                    >Precios</Link>
                    <Link 
                      className={styles.link+' nav-link rounded'}
                      to='contacto'
                      smooth={true}
                    >Contacto</Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </>
      );
}


export default navBar;