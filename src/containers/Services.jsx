import React from 'react';
import '../assets/styles/components/Services.scss';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import {  Container, Card, Button, Row } from 'react-bootstrap';

const Services = ({ trends }) => {
  return (
    <div className='Services'>

      <Container>

        <Row className="justify-content-md-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Card.Body>
              <Card.Title>Llenado de Extintores</Card.Title>
              <Card.Text>
                Servicio de recarga de extintor.
    </Card.Text>
              <Button variant="primary">ver más</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Card.Body>
              <Card.Title>Cursos</Card.Title>
              <Card.Text>
                Cursos de prevención y seguridad.
    </Card.Text>
              <Button variant="primary">ver más</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
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
