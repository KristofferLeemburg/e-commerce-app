import React from 'react';
import "../../styles/home.css"

export default function Section() {

    return (
        <div className="home">
            <div className="section-container">
                <p className="section1">Rust en Balans in je leven,
                <ul>
                        <li>Heb jij weinig energie</li>
                        <li>Zit je niet goed in je vel</li>
                        <li>Voel jij je onrustig</li>
                        <li>Wil je eigenlijk iets anders, maar wat?</li>
                    </ul>
                </p>
                <div className="section2"><p>Herken jij je hierin? Je hebt weinig energie en zit niet lekker in je vel. Je voelt aan alles dat er iets moet veranderen om balans en rust te ervaren.  Wi jij het leven te leiden zoals jij dat voor ogen hebt. Als coach kan ik je hierbij helpen. Ben jij er klaar voor om samen aan de slag te gaan?
                </p>
                <button>Ja, ik wil aan de slag</button>
                </div>
                
            </div>
        </div>
    );
}