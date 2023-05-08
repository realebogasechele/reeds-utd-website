import React from 'react';
import {
  MatchInfo,
  MatchHistory,
  Footer,
  About,
  Header,
} from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <About />
      <MatchInfo />
      <CTA />
      <MatchHistory />
      <Footer />
    </div>
  );
}
