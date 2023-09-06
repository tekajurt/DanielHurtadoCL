import Footer from "./footer";
import Navbar from "./navbar";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/Template.module.css"

const Template = (({ children,_sidebar, _navbar, _footer }) => {
  //console.log(handleShowPost, handleShowUser)
  const [currentSection, setCurrentSection] = useState('');
  const router = useRouter();
  const path = router.pathname;
  let navbar = true;
  let sidebar = true;
  let footer = true;

  
  
  if(_navbar!=undefined){
    navbar = _navbar;
  }
  if(_sidebar!=undefined){
    sidebar = _sidebar;
  }
  if(_footer!=undefined){
    footer = _footer;
  }
    
    useEffect(() => {
      const documentHeight = () => {
        const doc = document.documentElement
        const footer = document.getElementById("footer")
        

        
        //console.log(footer.offsetHeight)
        doc.style.setProperty("--footersize", footer?.offsetHeight-1+"px")
       }
       window.addEventListener("resize", documentHeight)
       documentHeight()
        const handleScroll = () => {
          // Obtiene la posición actual del scroll
          const scrollPosition = window.scrollY;
    
          // Realiza la lógica para determinar la sección actual según la posición del scroll
          // Aquí puedes usar la altura de las secciones o cualquier otro criterio
          // En este ejemplo, supongamos que cada sección ocupa 1000 píxeles
          const sectionHeight = 1000;
    
          // Calcula la sección actual
          const sectionIndex = Math.floor(scrollPosition / sectionHeight);
          const sectionName =sectionIndex;
    
          // Actualiza el estado con la sección actual
          setCurrentSection(sectionName);
        };
    
        // Agrega el evento de desplazamiento al cargar el componente
        window.addEventListener('scroll', handleScroll);
    
        // Limpia el evento al desmontar el componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [])
      
  return(
      <div className="main">
        {navbar?<Navbar path={path}/>:""}
        <div className={styles.containerPage+ " text-dark d-flex"}>
          
          <div className={styles.mainContainer +" "}>
            {children}
          </div>
        </div>
        {footer?<Footer/>:""}
      </div>
  );
});

export default Template;
