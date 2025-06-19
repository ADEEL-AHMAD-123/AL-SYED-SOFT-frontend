import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import VideoSection from '../components/VideoSection';
const Home = () => (
  <>
    <Header />
    <Hero /> 
    <VideoSection />    
    <Clients />
    <Features />
    <HowItWorks />
    <Testimonials />
    <FinalCTA />
    <Footer />
  </>
);

export default Home;
