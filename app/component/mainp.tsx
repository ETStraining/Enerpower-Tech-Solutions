import React from 'react';
import Navbar from '../nav/page';
import Boarding from '../bording/page';
import About from '../about/page';
import Mission from '../mission/page';
import Footer from '../footer/page';
import Container from './container'; 

const MainP = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Boarding />
        <About />
        <Mission />
        <Footer />
      </Container>
    </div>
  );
};

export default MainP;
