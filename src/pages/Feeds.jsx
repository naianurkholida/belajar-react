import React from 'react';
import './Feeds.css';
import NewsAndFeed from "../components/newsAndFeed";
import PublicContribution from '../components/publicContribution/publicContribution';
import Event from '../components/event/event';
import Magazine from '../components/magazine/magazine';


function Feeds() {
  return (
    <div className='page-container'>
      <NewsAndFeed/>
      <PublicContribution/>
      <Event/>
      <Magazine/>
    </div>
  );
}

export default Feeds;
