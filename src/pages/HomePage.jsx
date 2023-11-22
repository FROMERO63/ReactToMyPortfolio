import { useState, useEffect } from 'react';
// Used to Link between pages
import { Link } from 'react-router-dom';
import AboutMe from '../components/UI/AboutMe';
import Portfolio from '../components/UI/Portfolio';
import Resume from '../components/UI/Resume';
import Contact from '../components/UI/Contact';



export default function HomePage() {

  return (
    <div className="container pt-4">
      <AboutMe/>
      <Portfolio/>
      <Resume/>
      <Contact/>
    </div>
  );
}
