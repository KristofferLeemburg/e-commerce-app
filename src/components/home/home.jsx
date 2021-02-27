import React from 'react';
import "../../styles/home.css"
import background from "../../images/MachuPicchu.jpg"

export default function Navigation() {



  return (
    <div className="home">
        <div className="background-container">
        
        <img src={background} alt="home" className="background"/>
        
        </div>
    </div>
  );
}