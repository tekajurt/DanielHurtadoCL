import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modals from './modal';

const Carta = ({header,titulo,contenido, tituloModal, descripcionModal, ocultar}) => {
  return (
    <Card className='position-static  bg-transparente text-dark text-center h-100 w-100'>
      <Card.Header className='bg-primary text-white'>{header}</Card.Header>
      <Card.Body className='d-flex flex-column h-100'>
        <Card.Title>{titulo}</Card.Title>
        
        {contenido}
        <Modals titulo ={tituloModal} descripcion={descripcionModal} ocultarModal={ocultar} />
      </Card.Body>
    </Card>
  );
}

export default Carta;