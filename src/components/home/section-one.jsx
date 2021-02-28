import React, {useEffect, useRef} from "react";
import "../../styles/home.css"
import {TimelineLite, Power3} from 'gsap';


import imgGirl from "../../images/Shannon-Wilkinson-3.png"

function App() {

  let images = useRef(null)
  let tl = new TimelineLite({ delay: .6});
  
  useEffect(() => {

    const girlImage = images.firstElementChild;    

    tl.from(girlImage, 1, {x: 2080, ease: Power3.easeOut},'Start')
    .from(girlImage.firstElementChild, 2, {ease: Power3.easeOut}, .5)
  })


  return (
    <div className="section-one-container">
    <div className="hero">
          <div className="hero-images">
            <div ref={el => images = el}  className="hero-images-inner">
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" className="shanon"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;