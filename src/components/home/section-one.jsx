import React from 'react';
import "../../styles/home.css"
import shanon from "../../images/Shannon-Wilkinson-3.png"

export default function Section() {

    return (
        <div>
            <div className="section-one-container">
            <img src={shanon} alt="home" className="shanon"/>
            </div>
        </div>
    );
}