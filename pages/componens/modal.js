import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "../../styles/Modal.module.css"
import { Container } from 'react-bootstrap';
import {motion} from "framer-motion"

const Modals = ({titulo, descripcion, ocultarModal}) => {
  const [show, setShow] = useState(false);
  const [claseModal,setClaseModal] = useState("");

  useEffect(() => {
    if (ocultarModal) {
      setClaseModal("d-none");
    }
  }, [ocultarModal]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container  fluid className={claseModal+' d-flex h-100  align-self-end'}>
      <Button variant="primary" className={styles.BotonModal+" justify-content-center"} onClick={handleShow}>
        Detalles
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{descripcion}</p></Modal.Body>
        <Modal.Footer>
          <Button className="" variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Modals;
