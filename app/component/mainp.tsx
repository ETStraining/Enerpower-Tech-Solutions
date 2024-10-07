// MainP.js
import React from 'react';
import { ThemeProvider } from './themeContent'; // Adjust the path as needed
import Navbar from './navigation';
// import Home from '../components/Home';
import About from '../about/page';
// import Services from '../components/Services';
import Footer from '../footer/page';

export default function MainP() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        {/* <Home /> */}
        <About />
        {/* <Services /> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
