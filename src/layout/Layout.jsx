import React from 'react';
import { Container } from 'react-bootstrap';
import Search from '../components/Search';

const Layout = ({ children }) => {
  return (
    <>
      <Container
        style={{
          minHeight: '100vh',
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
