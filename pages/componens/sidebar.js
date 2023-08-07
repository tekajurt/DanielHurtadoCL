import React from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
import styles from "../../styles/Sidebar.module.css"
function sidebar() {
  const handleClick = () =>{
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }
  return (
    <div id="sidebar" className={styles.sidebar + " rounded-circle"}>
      <h3>
        <AiOutlineArrowUp className="position-absolute " onClick={handleClick}/>
      </h3>  

    </div>
  )
}

export default sidebar