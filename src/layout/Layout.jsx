import React from 'react';
import { Container } from 'react-bootstrap';
import Search from '../components/Search';
import Appbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Appbar />
      <Container
        style={{
          minHeight: '100vh',
          borderTop: 'solid 2px #D9D9D9',
        }}>
        <div className="d-block d-md-none">
          <Search />
        </div>
        {children}
      </Container>
    </>
  );
};

export default Layout;
