import React, { useContext } from 'react';
import { useState } from 'react';
import { Container, Dropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { loginCtx } from '../app/context/LoginContext';
import Icon from '../components/atoms/Icon';
import Search from '../components/Search';

const Appbar = () => {
  const { setShow, isLogin, setIsLogin } = useContext(loginCtx);

  const handleLogout = () => {
    localStorage.removeItem('ActiveUser');
    setIsLogin(false)
  };
  return (
    <Navbar
      style={{
        backgroundColor: '#fff',
        position: 'sticky',
        top: '0px',
        transition: '1s',
        borderBottom: '#f0f0f0 solid 2px',
        zIndex: '1000',
      }}
      expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={'/home'}>
            <img
              src="/images/foodise-logo.png"
              alt=""
              width={180}
              height={70}
            />
          </Link>
        </Navbar.Brand>
        <div className="d-none d-md-flex">
          <Search />
        </div>

        <div className="container-nav">
          <div className="box-nav d-none d-md-flex">
            <Link to={'/booked'}>
              <Icon
                image="/icons/bowl-food-solid.svg"
                alt="favorite"
              />
            </Link>
            <Link to={'#'}>
              <Icon image="/icons/bell-solid.svg" alt="notif" />
            </Link>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="light"
              className="rounded-pill border border-gray text-success avatar-menu">
              
                {isLogin ? 
                (<Icon image="/icons/avatar_the_legend_of_ang.svg" alt="avatar" />)
                : 
                (<Icon image="/icons/user-solid.svg" alt="avatar" />) 
                }
                <Icon image="/icons/bars-solid.svg" alt="menu" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div style={{ paddingLeft: '15px' }}>
                <Link to="/home" className="text-decoration-none">
                  Foods
                </Link>
              </div>
              <div style={{ paddingLeft: '15px' }}>
                <Link to="/booked" className="text-decoration-none">
                  Favorites
                </Link>
              </div>
              <Dropdown.Divider />
              {isLogin ? (
                <Dropdown.Item
                  link="#"
                  onClick={(e) => handleLogout()}>
                  Log out
                </Dropdown.Item>
              ) : (
                <>
                  <Dropdown.Item
                    link="#"
                    onClick={() => setShow(true)}>
                    Log in
                  </Dropdown.Item>
                  <Link
                    to={'/signup'}
                    className="text-decoration-none text-success text-center "
                    style={{
                      paddingLeft: '15px',
                      fontWeight: 'bold',
                    }}>
                    Sign up
                  </Link>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default Appbar;
