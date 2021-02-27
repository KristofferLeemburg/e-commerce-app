import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css";
import Navigation from './components/navbar/navigation';
import Home from './components/home/home';
import SectionOne from './components/home/section-one';
import SectionTwo from './components/home/section-two';
import Footer from './components/footer/footer';


ReactDOM.render(
  <React.StrictMode>
    <div className="Site">
    <Navigation />
    <Home />
    <SectionOne />
    <SectionTwo />
    <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
