import React, { useEffect } from 'react'
import { Fade } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
function section({id,className,children}) {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    
    <section data-aos="fade-up" id={id} className={className} >
        {children}
    </section>

  )
}

export default section