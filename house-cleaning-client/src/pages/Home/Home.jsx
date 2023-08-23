import React from 'react';
import SlideShow from './SlideShow/SlideShow';
import { ServiceCases } from '../Gallery'
import { ServiceOverview } from '../ServiceInfo';
import './Home.css'

function Home() {
  return (
    <>
      <SlideShow />
      <ServiceCases />
      <ServiceOverview />
    </>
  );
}

export default Home;
