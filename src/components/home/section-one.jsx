import React, {useEffect, useRef} from "react";
import "../../styles/home.css"
import {TimelineLite ,TweenMax, Power3} from 'gsap';


import imgGirl from "../../images/Shannon-Wilkinson-3.png"

function App() {
  let app = useRef(null)
  let images = useRef(null)
  let tl = new TimelineLite({ delay: .6});
  
  useEffect(() => {

    const girlImage = images.firstElementChild;    
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    tl.from(girlImage, 1, {x: 2080, ease: Power3.easeOut},'Start')
    .from(girlImage.firstElementChild, 2, {scale: 1, ease: Power3.easeOut}, .5)
  }, [tl])



  return (
    <div className="section-one-container">
    <div className="hero" ref={el => app = el}>
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