import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../assets/static/Logo.png';
import userIcon from '../assets/static/sonajero.png';
import gravatar from '../utils/gravatar.js';
import { logoutRequest } from '../actions';

import { Navbar,Nav,Form,FormControl,Button ,NavDropdown } from 'react-bootstrap';

const Header = (props) => {

  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});

  };

  Header.propTypes = {
    user: PropTypes.object,
    logoutRequest: PropTypes.func,
  };

  return (
    <header className='header'>

      <Link to='/'>
        <img className='header__img' src={logo} alt='Logo La Casita de Magy' />
      </Link>

    <Navbar bg="light" >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/servicios">Servicios</Nav.Link>
          <NavDropdown title="Ley de Transparencia" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Ley">Action</NavDropdown.Item>
            <NavDropdown.Item href="/Articulo">Another action</NavDropdown.Item>
            <NavDropdown.Item href="/Objetivo">Something</NavDropdown.Item>
            
          </NavDropdown>
        </Nav>      
        
      
    </Navbar>

    <div className='header__menu'>
          <div className='header__menu--profile'>
            {hasUser ?
              (<img src={gravatar(user.email)} alt={user.email} />) :
              (<img src={userIcon} alt='Perfil' />)
            }
            <p>Perfil</p>
          </div>
          <ul>
            {hasUser ?
              <li><a href='/'>{user.name}</a></li> :
              null
            }
            {hasUser ?
              <li><a href='/logout' onClick={handleLogout}>Cerrar Sesión</a></li> :
              <li><a href='/login'>Iniciar Sesión</a></li>
            }
          </ul>
        </div>

      

    </header>

  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDistpatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDistpatchToProps)(Header);
