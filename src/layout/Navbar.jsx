import React, { useContext } from 'react';
import { useState } from 'react';
import { Container, Dropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { filterCtx } from '../app/context/FilterContext';
import { loginCtx } from '../app/context/LoginContext';
import Icon from '../components/atoms/Icon';
import Search from '../components/Search';

const Appbar = () => {
  const { setShow, isLogin, setIsLogin } = useContext(loginCtx);
  const { setQuery, setCategory } = useContext(filterCtx);

  const handleLogout = () => {
    localStorage.removeItem('user-active');
    localStorage.removeItem('jwttoken');
    setIsLogin(false);
  };
  const handleHome = () => {
    setQuery(' ');
    setCategory(0);
  };
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
          <Link to={'/home'} onClick={() => handleHome()}>
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
            <Link to={'/favorite'} className="btn-icon">
              <Icon
                image="/icons/bowl-food-solid.svg"
                alt="favorite"
              />
            </Link>
            <Link to={'/recipe'} className="btn-icon">
              <Icon image="/icons/book-recipe.svg" alt="recipe" />
            </Link>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              style={{
                backgroundColor: '#fff',
              }}
              className="rounded-pill border border-gray text-success avatar-menu">
              <Icon image="/icons/user-solid.svg" alt="avatar" />

              <Icon image="/icons/bars-solid.svg" alt="menu" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link
                to="/profile"
                className="text-decoration-none  nav">
                Profile
              </Link>

              <Link to="/home" className="text-decoration-none  nav">
                Foods
              </Link>

              <Link
                to="/booked"
                className="text-decoration-none  nav">
                Favorites
              </Link>

              <Link
                to="/recipe"
                className="text-decoration-none  nav">
                Recipes
              </Link>

              <Dropdown.Divider />
              {isLogin ? (
                <Dropdown.Item
                  link="#"
                  className="nav-signup-active"
                  onClick={(e) => handleLogout()}>
                  Logout
                </Dropdown.Item>
              ) : (
                <div className="d-flex flex-column">
                  <Link
                    onClick={() => setShow(true)}
                    className="text-decoration-none nav-login">
                    Login
                  </Link>
                  <Link
                    to={'/signup'}
                    className="text-decoration-none nav-signup-active">
                    Signup
                  </Link>
                </div>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default Appbar;
