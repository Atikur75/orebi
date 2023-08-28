import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import FooterBottom from '../../components/layout/FooterBottom';
import BreadCrumb from '../../components/layout/BreadCrumb';
import AboutPage from '../../components/layout/AboutPage';

const About = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BreadCrumb />
      <AboutPage />
      <Footer />
      <FooterBottom />
    </>
  )
}

export default About;