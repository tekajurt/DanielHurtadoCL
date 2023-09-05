import React from 'react'
import styles from "../../styles/Section.module.css";
function section({id,className,children}) {
  
      
      
      return (
    
    <section  id={id} className={className+ " "+ styles.section} >
        {children}
    </section>

  )
}

export default section