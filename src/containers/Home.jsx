import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Container, Card, Button, Row } from 'react-bootstrap';
import ImagePrincipal from '../assets/static/curso2.jpg';

import ImageCars from '../assets/static/Cars.jpg';
import ImageGeneral from '../assets/static/services3.jpg';
import ImageExtintores from '../assets/static/services4.jpg';
import ImageCursos from '../assets/static/Curso.jpg';
import ImageOther from '../assets/static/servicios.jpg';
import LogoPolicia from '../assets/static/policia.png';
import LogoDC from '../assets/static/logoDC.png';
import LogoCR from '../assets/static/logoCR.jpg';

import '../assets/styles/components/Home.scss';

import '../assets/styles/App.scss';

const Home = ({ trends }) => {
  // const initialState = useInitialState(API);
  return (
    <div className='home'>

      <h1 className='title'>Cuerpo de Bomberos Voluntarios Ansermanuevo</h1>

      <img className='image1' id='Image1' data-type='image' src={ImagePrincipal} alt='Imagen Principal' />

      <Jumbotron fluid>
        <Container>
          <h1 >Misión</h1>
          <h3>Un Futuro Sostenible</h3>
          <p >
            La Unidad Administrativa Especial Dirección Nacional de Bomberos es la Entidad Nacional que dirige, coordina, regula y acompaña la actividad de los cuerpos de Bomberos oficiales, voluntarios y aeronáuticos del País para la debida implementación de políticas y normatividad tendiente a garantizar la prestación eficiente del servicio público esencial de gestión integral de riesgo contra incendio, los preparativos y atención de rescates en todas sus modalidades y la atención de incidentes con materiales peligrosos, brindando su máximo desempeño a toda la comunidad acorde a su vocación de servicio, sensibilidad social, entrega y disciplina.
        </p>
        </Container>
      </Jumbotron>

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


      <br />

      <div className='panel__info'>
        <div className='panel1'>
          <h2 className='title__2'>Objetivo General</h2>
          <p>
            Liderar la implementación de la gestión integral de riesgos contra incendio, los preparativos y atención de rescates en todas sus modalidades y la atención de incidentes con materiales peligrosos de los Bomberos de Colombia.
          </p>

        </div>

        <div className='panel2'>
          <img className='panel2__image2' id='Image2' data-type='image' src={ImageGeneral} alt='Logo' />
        </div>

      </div>

      <div className='panel__info'>
        <div className='panel1'>
          <h2 className='title__2'>¿Quiénes somos?</h2>
          <p>
            La Dirección Nacional de Bomberos se crea como Unidad Administrativa Especial del orden nacional, con personería jurídica, adscrita al Ministerio del Interior, con autonomía administrativa, financiera y patrimonio propio, cuya sede es la ciudad de Bogotá, D.C.
          </p>

          <p>
            Todas las instituciones bomberiles del país, oficiales, aeronáuticos y voluntarios, así como sus miembros estarán bajo coordinación operativa de la Dirección Nacional de Bomberos de Colombia.
          </p>

        </div>

        <div className='panel2'>
          <img className='panel2__image2' id='Image2' data-type='image' src={ImageCars} alt='img2' />
        </div>
      </div>

      <Card body>

        <h2>Entidades asociadas</h2>
        <div className='panel__aliados'>
          <img src={LogoPolicia} alt='Logo ' className='panel__aliados--logo' />
          <img src={LogoCR} alt='Logo ' className='panel__aliados--logo' />
          <img src={LogoDC} alt='Logo ' className='panel__aliados--logo' />
        </div>
      </Card>

      <div dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987.9236697386907!2d-75.99403134210533!3d4.796244671948093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3873d6299da96b%3A0xfb2e29ec52749aeb!2sBomberos%20Anserma%20Nuevo!5e0!3m2!1ses!2sco!4v1603492681105!5m2!1ses!2sco" width="100%" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>' }} />

    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};
// export default Home;
// export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);
