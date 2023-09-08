import React, { useEffect, useState } from "react";
import { Button, Col, Container, NavLink, Row } from "react-bootstrap";
import Carta from "./componens/card"
import Image from "next/image";
import Template from "./componens/template/template"
import styles from '../styles/Home.module.css';
import {TbArrowBigUpLine,TbBrandWhatsapp, TbHeartHandshake,TbShieldCheck,TbChartDots3,TbPeace,TbHourglass, TbTool, TbEngine, TbHeartRateMonitor, TbCheckbox,TbMailFast,TbPhoneCall} from "react-icons/tb"
import Sections from "./componens/section";

const home = () => {
    
   
      
      
    return (
        <Template >
            <Button className={styles.botonFlotante + " btn btn-primary rounded-circle"} href="#home"><TbArrowBigUpLine/></Button>
            <Button className={styles.botonWhatsapp + " btn btn-success rounded-circle"} href="https://wa.me/message/HSTFQYH4HZBKP1"><TbBrandWhatsapp/></Button>
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
                        <Image width={500} height={500} className="roll-in-blurred-right w-100 " src="/acreditado.png" alt="Acreditado por el OS10"/>
                    </Col>
                </Row>
            </Sections>
            
            
            <Sections id="proyectos" className={"d-flex flex-column"}>
                <h1 className="text-center">Proyectos</h1>
                <Row className="mt-5">
                    <Col>
                        <Carta 
                            header={<h1><TbHeartHandshake /></h1>}
                            titulo="Confianza" 
                            contenido=""
                            tituloModal="Confianza"
                            descripcionModal="Cencotel es un aliado poderoso para disminuir sus riesgos en seguridad para que usted descanse tranquilo."
                            />
                    </Col>
                    <Col>
                        <Carta 
                            header={<h1><TbShieldCheck /></h1>} 
                            titulo="Seguridad" 
                            contenido={""}
                            tituloModal="Seguridad"
                            descripcionModal="Las cámaras son vigiladas por personal capacitado que actúa con la preocupación de cuidar su empresa"
                            />
                    </Col>
                    <Col>
                        <Carta 
                            header={<h1><TbChartDots3 /></h1>}
                            titulo="Trayectoria" 
                            contenido={""}
                            tituloModal="Trayectoria"
                            descripcionModal="Cencotel es una empresa con amplia trayectoria en la seguridad y la televigilancia a su disposición para asesorarle y brindarle el mejor servicio. Para todos sus problemas de seguridad, Cencotel tiene una propuesta."
                            />
                    </Col>
                </Row>
            </Sections>
            <Sections id="nosotros" className={"d-flex flex-column bg-pasto puff-in-center"}>
                <h1 className="text-center">Nosotros</h1>
                <Row className={styles.fondoTexto+" mt-5 m-auto rounded"}>
                    <Col xs="12" md="6" className="d-flex position-relative align-items-center justify-content-center">
                        <Image fill={true}  className="" src="/about.jpg" alt="Dos personas sentadas trabajando en una mesa blanca"/>
                    </Col>
                    <Col className="d-flex flex-column">
                       <h2 className="text-center mt-5">¿Como lo hacemos?</h2> 
                        <p className="mt-5 ms-5">Nos dedicamos a el monitoreo de cámaras y alarmas, además de sistemas de altoparlante con el fin de expulsar al intruso, además de hacer recomendaciones sobre posibles vulnerabilidades</p>
                       <div className="d-flex flex-column align-items-center mt-5 ms-5">

                        <Row>
                            <Col className="" xs="2">
                                <h1><TbPeace /></h1>
                            </Col>
                            <Col xs="10">
                                <h2>Tranquilidad</h2>
                                <p>Cencotel es un aliado poderoso para disminuir sus riesgos en seguridad para que usted descanse tranquilo.</p>
                            </Col>
                            <Col className="" xs="2">
                                <h1><TbHourglass /></h1>
                            </Col>
                            <Col xs="10">
                                <h2>Experiencia</h2>
                                <p>Cencotel es un aliado poderoso para disminuir sus riesgos en seguridad para que usted descanse tranquilo.</p>
                            </Col>
                            <p className="text-center">Descanse, nosotros vigilamos</p>
                        </Row>
                       </div>
                        

                    </Col>
                </Row>
            </Sections>
            <Sections id="servicios" className={"d-flex flex-column  bg-light"}>
                <h1 className="text-center">Servicios</h1>
                <h5 className="text-center">Ofrecemos una variedad de servicios para su tranquilidad y seguridad</h5>
                <Row className="mt-5">
                    <Col>
                        <Carta
                            header={<h1><TbTool /></h1>}
                            titulo={"Instalación"}
                            contenido={"Instalación de sistemas de seguridad y vigilancia que sean recomendadas por nosotros o las suyas propias"}
                            ocultar={true}
                            />
                    </Col>
                    <Col>
                        <Carta
                            header={<h1><TbEngine /></h1>}
                            titulo={"Mantención"}
                            contenido={"Servicio de mantención mensual para el optimo cuidado de los equipos"}
                            ocultar={true}
                            />
                    </Col>
                    <Col>
                        <Carta
                            header={<h1><TbHeartRateMonitor /></h1>}
                            titulo={"Monitoreo"}
                            contenido={"Servicio de televigilancia de cámaras, alarmas, etc."}
                            ocultar={true}
                            />
                    </Col>
                    <Col>
                        <Carta
                            header={<h1><TbCheckbox /></h1>}
                            titulo={"Control"}
                            contenido={"Control de accesos y presencia, manejo de sistemas de seguridad, entre otros"}
                            ocultar={true}
                            />
                    </Col>
                </Row>
            </Sections>

            <Sections id="clientes" className={" d-flex flex-column bg-pasto "}>
            <h1 className="text-center">Clientes</h1>
                <Row className={styles.fondoTexto+" mt-5 rounded"} >
                <h5 className="text-center">Algunos de los clientes que decidieron dejar en nuestras manos su seguridad</h5>
                    <Col className={styles.cliente+" "}>
                        <img className={styles.imagenServimar} src="/clientes/cliente-4.png" alt="Servimar"/>
                    </Col>
                    <Col className={styles.cliente+" "}>
                        <img className={styles.imagen} src="/clientes/cliente-2.png" alt="Conaf"/>
                    </Col>
                    <Col className={styles.cliente+" "}>
                        <img className={styles.imagen} src="/clientes/cliente-1.jpeg" alt="Plasticos Austral"/>
                    </Col>
                    <Col className={styles.cliente+" "}>
                        <img className={styles.imagen} src="/clientes/cliente-3.png" alt="Alumplast"/>
                    </Col>
                    <Col className={styles.cliente+" "}>
                        <h1 className={styles.imagenCPMontt}>Condominio Puerto Montt</h1>
                    </Col>
                </Row>
            </Sections>
            <Sections id="precios" className={"d-flex flex-column  bg-light"}>
                <h1 className="text-center">Precios</h1>
                <Row className="mt-5">
                    <Col>
                        <Carta
                            header={<h5>Plan Básico</h5>}
                            titulo={<h2>$60.000</h2>}
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
                            header={<h5>Plan Hogar</h5>}
                            titulo={<h2>$100.000</h2>}
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
                            header={<h5>Plan Premium</h5>}
                            titulo={<h2>$200.000</h2>}
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
                <h1 className="text-center">Contáctanos</h1>
                <Row className={styles.fondoTexto+" my-5 rounded p-5"}>
                <h5 className="text-center">Cualquier duda, pregunta o simplemente un saludo, contáctenos y responderemos a la brevedad</h5>
                    <Col>
                        <Carta
                            header={<h1><TbMailFast /></h1>}
                            titulo={"Mandanos un mensaje"}
                            contenido={"roberto@cencotel.cl"}
                            ocultar= {true}
                            />
                    </Col>
                    <Col>
                        <Carta
                            header={<h1><TbPhoneCall /></h1>}
                            titulo={"o llámanos"}
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