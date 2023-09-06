// add bootstrap css 
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createContext,useState } from 'react';

export const UserContext = createContext()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [carrito,setCarrito] = useState([])
  return (
      <UserContext.Provider value={{carrito,setCarrito}}>
                
          <Component {...pageProps} />
      </UserContext.Provider>

  )
}