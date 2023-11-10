import React from 'react';
import './page.css';
import NewsAndFeed from "../components/newsAndFeed";
import PublicContribution from '../components/publicContribution/publicContribution';
import Event from '../components/event/event';
import Magazine from '../components/magazine/magazine';
import Navbar from '../components/navbar/navbar';


function page() {
  return (
    <>
    <Navbar/>
    <NewsAndFeed/>
    <PublicContribution/>
    <Event/>
    <Magazine/>

    </>
    
  );
}

export default page;
