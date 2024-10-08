import React from 'react';
import Navbar from '../nav/page';
import Boarding from '../bording/page';
import About from '../about/page';
// import Services from '../components/Services';
import Footer from '../footer/page';
import Container from './container'; 

const MainP = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Boarding />
        <About />
        {/* <Services /> */}
        <Footer />
      </Container>
    </div>
  );
};

export default MainP;
