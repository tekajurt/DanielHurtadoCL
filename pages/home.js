import { Button, Col, NavLink, Row } from "react-bootstrap";
import Carta from "./componens/card"
import Image from "next/image";
import Template from "./componens/template/template"
import styles from '../styles/Home.module.css';
import {TbArrowBigUpLine,TbBrandWhatsapp, TbHeartHandshake,TbShieldCheck,TbChartDots3,TbPeace,TbHourglass, TbTool, TbEngine, TbHeartRateMonitor, TbCheckbox,TbMailFast,TbPhoneCall} from "react-icons/tb"
import Sections from "./componens/section";

const home = () => {
    
   
      
      
    return (
        <Template >
            <Button className={styles.botonFlotante + " btn btn-primary rounded-circle"} href="#home" title="Subir"><TbArrowBigUpLine/></Button>
            <Button className={styles.botonWhatsapp + " btn btn-success rounded-circle"} href="https://wa.me/message/HSTFQYH4HZBKP1" title="Whatsapp"><TbBrandWhatsapp/></Button>
            <Sections id="home" className={styles.home + " bg-pasto d-flex flex-column align-items-center justify-content-center"}>
                <Row className=" align-items-center justify-content-between">
                    <Col md={6}>
                        <div className="text-center d-flex flex-column align-self-center mx-auto roll-in-blurred-left">
                            <h1>Bienvenidos a</h1>
                            <h1 className="text-primary">Cencotel</h1>
                            <NavLink 
                                className={'btn btn-primary text-light rounded'}
                                href='#contacto'
                                >Contactanos</NavLink>
                        </div>
                    </Col >
                    <Col md={6} className="position-relative">
                        <Image width={500} height={500} className="roll-in-blurred-right w-100 h-100 " src="/acreditado.png" alt="Acreditado por el OS10 de carabineros" title="Acreditacion OS10"/>
                    </Col>
                </Row>
            </Sections>
            
            
            <Sections id="proyectos" className={"d-flex flex-column"}>
                <h2 className="text-center">Proyectos</h2>
                <Row className="mt-5">
                    <Col>
                        <Carta 
                            header={<TbHeartHandshake className={styles.icono} />}
                            titulo={<h3>Confianza</h3>}
                            contenido=""
                            tituloModal="Confianza"
                            descripcionModal="Cencotel es un aliado poderoso para disminuir sus riesgos en seguridad para que usted descanse tranquilo."
                            />
                    </Col>
                    <Col>
                        <Carta 
                            header={<TbShieldCheck className={styles.icono}/>} 
                            titulo={<h3>Seguridad</h3>} 
                            contenido={""}
                            tituloModal="Seguridad"
                            descripcionModal="Las cámaras son vigiladas por personal capacitado que actúa con la preocupación de cuidar su empresa"
                            />
                    </Col>
                    <Col>
                        <Carta 
                            header={<TbChartDots3 className={styles.icono}/>}
                            titulo={<h3>Trayectoria</h3>} 
                            contenido={""}
                            tituloModal="Trayectoria"
                            descripcionModal="Cencotel es una empresa con amplia trayectoria en la seguridad y la televigilancia a su disposición para asesorarle y brindarle el mejor servicio. Para todos sus problemas de seguridad, Cencotel tiene una propuesta."
                            />
                    </Col>
                </Row>
            </Sections>
            <Sections id="nosotros" className={"d-flex flex-column bg-pasto puff-in-center"}>
                <h2 className="text-center">Nosotros</h2>
                <Row className={styles.fondoTexto+" mt-5 m-auto rounded"}>
                    <Col xs="12" md="6" className="d-flex position-relative align-items-center justify-content-center d-none d-md-flex">
                        <img className={styles.imagenAbout+ " "} src="/about.jpg" alt="Dos personas sentadas trabajando en una mesa blanca" title="Nosotros"/>
                    </Col>
                    <Col className="d-flex flex-column">
                       <h3 className="text-center mt-5">¿Como lo hacemos?</h3> 
                        <p className="mt-5 ms-5">Nos dedicamos a el monitoreo de cámaras y alarmas, además de sistemas de altoparlante con el fin de expulsar al intruso, además de hacer recomendaciones sobre posibles vulnerabilidades</p>
                       <div className="d-flex flex-column align-items-center mt-5 ms-5">

                        <Row>
                            <Col className="" xs="2">
                                <TbPeace className={styles.icono}/>
                            </Col>
                            <Col xs="10">
                                <h4>Tranquilidad</h4>
                                <p>Cencotel es un aliado poderoso para disminuir sus riesgos en seguridad para que usted descanse tranquilo.</p>
                            </Col>
                            <Col className="" xs="2">
                                <TbHourglass className={styles.icono}/>
                            </Col>
                            <Col xs="10">
                                <h4>Experiencia</h4>
                                <p>Cencotel es un aliado poderoso para disminuir sus riesgos en seguridad para que usted descanse tranquilo.</p>
                            </Col>
                            <p className="text-center">Descanse, nosotros vigilamos</p>
                        </Row>
                       </div>
                        

                    </Col>
                </Row>
            </Sections>
            <Sections id="servicios" className={"d-flex flex-column  bg-light"}>
                <h2 className="text-center">Servicios</h2>
                <h3 className="text-center">Ofrecemos una variedad de servicios para su tranquilidad y seguridad</h3>
                <Row className="mt-5">
                    <Col>
                        <Carta
                            header={<TbTool className={styles.icono}/>}
                            titulo={<h4>Instalación</h4>}
                            contenido={"Instalación de sistemas de seguridad y vigilancia que sean recomendadas por nosotros o las suyas propias"}
                            ocultar={true}
                            />
                    </Col>
                    <Col>
                        <Carta
                            header={<TbEngine className={styles.icono}/>}
                            titulo={<h4>Mantención</h4>}
                            contenido={"Servicio de mantención mensual para el optimo cuidado de los equipos"}
                            ocultar={true}
                            />
                    </Col>
                    <Col>
                        <Carta
                            header={<TbHeartRateMonitor className={styles.icono}/>}
                            titulo={<h4>Monitoreo</h4>}
                            contenido={"Servicio de televigilancia de cámaras, alarmas, etc."}
                            ocultar={true}
                            />
                    </Col>
                    <Col>
                        <Carta
                            header={<TbCheckbox className={styles.icono}/>}
                            titulo={<h4>Control</h4>}
                            contenido={"Control de accesos y presencia, manejo de sistemas de seguridad, entre otros"}
                            ocultar={true}
                            />
                    </Col>
                </Row>
            </Sections>

            <Sections id="clientes" className={" d-flex flex-column bg-pasto "}>
            <h2 className="text-center">Clientes</h2>
                <Row className={styles.fondoTexto+" mt-5 rounded"} >
                <h3 className="text-center">Algunos de los clientes que decidieron dejar en nuestras manos su seguridad</h3>
                    <Col className={styles.cliente+" "}>
                        <img className={styles.imagenServimar} src="/clientes/cliente-4.png" alt="Servimar" title="Servimar"/>
                    </Col>
                    <Col className={styles.cliente+" "}>
                        <img className={styles.imagen} src="/clientes/cliente-2.png" alt="Conaf" title="Conaf"/>
                    </Col>
                    <Col className={styles.cliente+" "}>
                        <img className={styles.imagen} src="/clientes/cliente-1.jpeg" alt="Plasticos Austral" title="Plasticos Austral"/>
                    </Col>
                    <Col className={styles.cliente+" "}>
                        <img className={styles.imagen} src="/clientes/cliente-3.png" alt="Alumplast" title="Alumplast"/>
                    </Col>
                    <Col className={styles.cliente+" "}>
                        <h4 className={styles.imagenCPMontt}>Condominio Puerto Montt</h4>
                    </Col>
                </Row>
            </Sections>
            <Sections id="precios" className={"d-flex flex-column  bg-light"}>
                <h2 className="text-center">Precios</h2>
                <Row className="mt-5">
                    <Col>
                        <Carta
                            header={<h3>Plan Básico</h3>}
                            titulo={<h4>$60.000</h4>}
                            contenido={
                                <div>
                                    <h5>/mes + iva</h5>
                                    <p>Instalación: $120.000 + iva</p>
                                    <p>1 cámara IP</p>
                                </div>
                            }
                            ocultar={true}
                            />
                    </Col> 
                    <Col>
                        <Carta
                            header={<h3>Plan Hogar</h3>}
                            titulo={<h4>$100.000</h4>}
                            contenido={
                                <div>
                                <h5>/mes + iva</h5>
                                <p>Instalación: $200.000 + iva</p>
                                <p>2 cámara IP</p>
                            </div>
                            }
                            ocultar={true}
                            />
                    </Col>  
                    <Col>
                        <Carta
                            header={<h3>Plan Premium</h3>}
                            titulo={<h4>$200.000</h4>}
                            contenido={
                                <div>
                                    <h5>/mes + iva</h5>
                                    <p>Instalación: $400.000 + iva</p>
                                    <p>5 cámara IP</p>
                                </div>
                            }
                            ocultar={true}
                            />
                    </Col>
                </Row>
            </Sections>
            <Sections id="contacto" className={" d-flex flex-column bg-pasto"}>
                <h2 className="text-center">Contáctanos</h2>
                <Row className={styles.fondoTexto+" my-5 rounded p-5"}>
                <h3 className="text-center mb-5">Cualquier duda, pregunta o simplemente un saludo, contáctenos y responderemos a la brevedad</h3>
                    <Col>
                        <Carta
                            header={<TbMailFast className={styles.icono}/>}
                            titulo={<h4>Mandanos un mensaje</h4>}
                            contenido={"roberto@cencotel.cl"}
                            ocultar= {true}
                            />
                    </Col>
                    <Col>
                        <Carta
                            header={<TbPhoneCall  className={styles.icono} />}
                            titulo={<h4>o llámanos</h4>}
                            contenido={"+56977582734"}
                            ocultar= {true}
                            />
                    </Col>
                </Row>
            </Sections>
            

        </Template>
    )
}
export default home;