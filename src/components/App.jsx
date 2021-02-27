import React from 'react';
import "../styles/app.css"
import Navigation from '../components/navbar/navigation';
import SectionOne from '../components/home/section-one';
import SectionTwo from '../components/home/section-two';
import SectionThree from '../components/home/section-three';
import Footer from '../components/footer/footer';

export default function App() {

    return (
        <div className="container">
            <Navigation />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Footer />
        </div>
    );
}