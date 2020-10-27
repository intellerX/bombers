import React from 'react';
import '../assets/styles/components/Contact.scss';
import { Accordion, Card, Button } from 'react-bootstrap';
import ImagePrincipal from '../assets/static/services2.jpg';
import ImageEstructura from '../assets/static/consejo.jpg';
import Mision from '../assets/static/Misions.jpg';
import Vision from '../assets/static/Visions.jpg';
import Organigrama from '../assets/static/ORGANIGRAMA.jpg';
import Politica from '../assets/static/Politics.jpg';


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
              Dirección: Cra 3 # 7-40, Ansermanuevo, centro <br />
              Teléfono: +57 3158231406 <br />
              Linea Gratuita: Linea de Emergencia 123 <br />
              Correo electrónico: bomberosansermanuevo@gmail.com <br />
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
            <Card.Body>
              <img className='imageLaw' id='Image1' data-type='image' src={Politica} alt='Politica' />

            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              3. Estructura orgánica y talento humano

            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">

            <Card.Body>
              <img className='imageLaw' id='Image1' data-type='image' src={Organigrama} alt='Organigrama' />
              <img className='imageLaw' id='Image1' data-type='image' src={ImageEstructura} alt='Estructura' />
              <img className='imageLaw' id='Image1' data-type='image' src={Mision} alt='Mision' />
              <img className='imageLaw' id='Image1' data-type='image' src={Vision} alt='Vision' />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    </>

  );
};

export default Contact;
