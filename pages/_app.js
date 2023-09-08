// add bootstrap css 
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createContext,useState } from 'react';
import {Helmet} from "react-helmet";

export const UserContext = createContext()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [carrito,setCarrito] = useState([])
  return (
      <UserContext.Provider value={{carrito,setCarrito}}>
          <Helmet htmlAttributes={{ lang : "es"}}>
              <title>Cencotel, Monitoreo e instalación de cámaras de seguridad</title>
              <meta name="description" content="Cencotel EIRL es una empresa radicada en Puerto montt, dedicada al monitoreo e instalación de cámaras de vigilancia, utilizando en esto algoritmos de inteligencia artificial para detectar movimientos y poder avisar de forma oportuna" />  
              <meta name='keywords' content='cencotel, vigilancia,monitoreo de camaras, cámaras, monitoreo de cámaras, seguridad, camaras, inteligencia artificial, monitoreo, alarmas, cctv, cencotel eirl, cencotel e.i.r.l, cencotel e.i.r.l.,no grabe robos, evitelos, robos, grabar, evitar,  evite, evitar' />
              <meta name="robots" content="index, follow" />
              <link rel="canonical" href="https://new.cencotel.cl/" />
              <link name="publisher" href="https://new.cencotel.cl/" />
              <meta name="author" content="Cencotel EIRL" />
              <meta name="language" content="es" />
          </Helmet>      
          <Component {...pageProps} />
      </UserContext.Provider>

  )
}