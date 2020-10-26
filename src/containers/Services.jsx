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
              <Card.Title>Llenado de Extintores</Card.Title>
              <Card.Text>
                Servicio de recarga de extintor.
    </Card.Text>
              <Button variant="primary">ver más</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ImageCursos} />
            <Card.Body>
              <Card.Title>Cursos</Card.Title>
              <Card.Text>
                Cursos de prevención y seguridad.
    </Card.Text>
              <Button variant="primary">ver más</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ImageExtintores} />
            <Card.Body>
              <Card.Title>Servicio</Card.Title>
              <Card.Text>
                Servicio de ejemplo con descripción.
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
