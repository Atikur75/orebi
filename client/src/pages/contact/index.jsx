import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Header from '../../components/layout/Header';
import BreadCrumb from '../../components/layout/BreadCrumb';
import Footer from '../../components/layout/Footer';
import FooterBottom from '../../components/layout/FooterBottom';
import ContactPage from '../../components/layout/ContactPage';

const Contact = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BreadCrumb />
      <ContactPage />
      <Footer />
      <FooterBottom />
    </>
  )
}

export default Contact;