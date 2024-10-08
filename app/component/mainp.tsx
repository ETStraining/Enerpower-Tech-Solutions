import React from 'react';
import { ThemeProvider } from './themeContent'; // Adjust the path as needed
import Navbar from '../nav/page';
import Boarding from '../bording/page';
import About from '../about/page';
import Mission from '../mission/page';
import Footer from '../footer/page';
import Container from './container'; 

const MainP = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Container>
        <Boarding />
        <About />
        <Mission />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default MainP;
