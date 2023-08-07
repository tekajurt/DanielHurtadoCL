import { forwardRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import styles from "../../styles/Footer.module.css"
import Link from "next/link";
import { Row,Col } from "react-bootstrap";
const Footer = forwardRef((props, ref) => {
  return (
    <footer className={styles.footer + " text-between d-flex"} ref={ref}>
      <Row className="w-100">
        <Col>
          <p className=""><BsWhatsapp /> +56977582734</p>
        </Col>
        <Col>
          <p className="text-end">© Copyright <a className="text-primary" href="http://www.cencotel.cl">Cencotel EIRL.</a>  All Rights Reserved</p>
        </Col>
      </Row>
      
      
    </footer>
  );
});

export default Footer;