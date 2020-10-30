import React from 'react';
import '../assets/styles/components/Services.scss';
import { connect } from 'react-redux';
import ImageCars from '../assets/static/Cars.jpg';
import ImageGeneral from '../assets/static/services3.jpg';
import ImageExtintores from '../assets/static/services4.jpg';
import ImageCursos from '../assets/static/Curso.jpg';
import ImageOther from '../assets/static/servicios.jpg';
import { Container, Card, Button, Row } from 'react-bootstrap';

const Services = ({ trends }) => {
  return (
    <div className='Services'>

      <Container>

      <Row className="justify-content-md-center">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ImageOther} />
          <Card.Body>
            <Card.Title>Diagnósticos de seguridad</Card.Title>
            <Card.Text>
              Visitas de seguridad bomberil a los establecimientos de industria y comercio para verificar la seguridad humana.
          </Card.Text>
            <Button variant="primary">ver más</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ImageCursos} />
          <Card.Body>
            <Card.Title>Capacitaciones</Card.Title>
            <Card.Text>
              Servicios de capacitación en temas como manejo seguro de extintores y
              atención prehospitalaria
            </Card.Text>
            <Button variant="primary">ver más</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ImageExtintores} />
          <Card.Body>
            <Card.Title>Servicios</Card.Title>
            <Card.Text>
              -Soporte básico de vida <br/>
              -Incendios forestales <br/>
              -Clase de incendios <br/>
              -Comunicaciones integradas <br/>
          </Card.Text>
            <Button variant="primary">ver más</Button>
          </Card.Body>
        </Card>

      </Row>
      </Container>

    </div>

  );
};
const mapStateToProps = (state) => {
  return {
    trends: state.trends,
  };
};
export default connect(mapStateToProps, null)(Services);
