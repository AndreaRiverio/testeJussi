import React from 'react';
import Newsletter from './../../components/Newsletter';
import Footer from './../../components/Footer';
import Marketplace from '../../components/Marketplace';
import Jussi from '../../components/Jussi';
import Products from './../../components/Products';
import BannerClient from '../../components/BannerClient';
import BannerPage from '../../components/BannerPage';
import Header from '../../components/Header';

export default function Home() {
    return (
      <>
        <Header/>
        <BannerPage/>
        <BannerClient/>
        <Products/>
        <Jussi/>
        <Marketplace/>
        <Newsletter/>
        <Footer />
      </>
    );
  }