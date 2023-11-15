import React from 'react';
import './Feeds.css';
import NewsAndFeed from "../components/newsAndFeed";
import PublicContribution from '../components/publicContribution/publicContribution';
import Event from '../components/event/event';
import Magazine from '../components/magazine/magazine';
import Navbar from '../components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from '../components/footer/footer';


function Feeds() {
  return (
    <div className='page-container'>
      {/* <Navbar/> */}
      <NewsAndFeed/>
      <PublicContribution/>
      <Event/>
      <Magazine/>
      {/* <Footer/> */}
    </div>
    
  );
}

export default Feeds;
