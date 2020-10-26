import React from 'react';
import '../assets/styles/components/Contact.scss';
import { Accordion, Card, Button } from 'react-bootstrap';
import ImagePrincipal from '../assets/static/services2.jpg';


const Contact = () => {

  return (

    <>
      <img className='imageLaw' id='Image1' data-type='image' src={ImagePrincipal} alt='Imagen Principal' />

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              1. Mecanismos de contacto con el sujeto obligado
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Dirección: Cl. 6 #25, Ansermanuevo, Puerto Rondón, Arauca <br />
              Teléfono: +57 3158231406 <br />
              Linea Gratuita: Linea de Emergencia 123 <br />
              Correo electrónico: info@bomber.gov.co <br />
              Horario de Atención: Lunes a Viernes: 7:00 a.m - 4:30 p.m. <br />
              Departamento: Valle Del Cauca <br />
              Ciudad: Ansermanuevo - Colombia <br />
              Código postal: 762010 <br />
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              2. Información de Interés
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Incidentes atendidos</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              3. Estructura orgánica y talento humano
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body> <strong>Misión</strong>  <br/>
              Proteger la vida, el ambiente y el patrimonio, a través de la gestión integral de riesgos de incendios, atención de rescates en todas sus modalidades e incidentes con materiales peligrosos en Bogotá y su entorno.

              <br/> <strong>Visión</strong>  <br/>
              Al 2030, ser el mejor cuerpo de bomberos de Colombia soportado en el compromiso de sus colaboradores y la confianza de los ciudadanos, reconocido a nivel mundial por su fortaleza técnica y capacidad de gestión.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    </>

  );
};

export default Contact;
