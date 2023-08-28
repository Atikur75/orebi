import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Header from '../../components/layout/Header';
import Banner from '../../components/layout/Banner';
import BannerBottom from '../../components/layout/BannerBottom';
import Advertise from '../../components/layout/Advertise';
import NewArrival from '../../components/layout/NewArrival';
import OurBestSellers from '../../components/layout/OurBestSellers';
import AdvertiseBanner from '../../components/layout/AdvertiseBanner';
import SpecialOffers from '../../components/layout/SpecialOffers';
import Footer from '../../components/layout/Footer';
import FooterBottom from '../../components/layout/FooterBottom';

const Home = () => {


  return (
    <>
      <Navbar />
      <Header />
      <Banner />
      <BannerBottom />
      <Advertise />
      <NewArrival />
      <OurBestSellers />
      <AdvertiseBanner />
      <SpecialOffers />
      <Footer />
      <FooterBottom />
    </>
  )
}

export default Home;