import React from 'react';
import { Container } from 'react-bootstrap';
import Search from '../components/Search';
import Footer from './Footer';
import Appbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Appbar />
      <Container
        style={{
          minHeight: '100vh',
          paddingTop: '20px',
        }}>
        <div className="d-block d-md-none">
          <Search />
        </div>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
