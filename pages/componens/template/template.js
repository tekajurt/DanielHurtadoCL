import Footer from "./footer";
import Navbar from "./navbar";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/Template.module.css"

const Template = (({ children,_sidebar, _navbar, _footer }) => {
  //define currentSection para obtener la seccion actual
  const [currentSection, setCurrentSection] = useState('');
  //define router para obtener la ruta actual
  const router = useRouter();
  const path = router.pathname;
  //define si se muestra o no el navbar, sidebar y footer
  let navbar = true;
  let sidebar = true;
  let footer = true;
//si se recibe algun parametro se sobreescribe el valor por defecto
  if(_navbar!=undefined){
    navbar = _navbar;
  }
  if(_sidebar!=undefined){
    sidebar = _sidebar;
  }
  if(_footer!=undefined){
    footer = _footer;
  }
    //useEffect que ejecuta la funcion handleScroll cada vez que se cambia la seccion actual
    useEffect(() => {
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
    //useEffect que define el footersize en el css
    useEffect(() => {
      //funcion que obtiene el height del footer y lo asigna a la variable css --footersize
      const documentHeight = () => {
        const doc = document.documentElement
        const footer = document.getElementById("footer")
        //sets the css variable --footersize to the height of the footer
        doc.style.setProperty("--footersize", footer?.offsetHeight-1+"px")
       }
       //crea un eventListener de nombre resize que ejecuta la funcion documentHeight cada vez que se cambia el tamaño de la pantalla
       window.addEventListener("resize", documentHeight)
        //ejecuta la funcion documentHeight al cargar la pagina
       documentHeight()

        
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
