import React, {useEffect, useRef} from "react";
import "../../styles/home.css"
import {TimelineLite, Power3} from 'gsap';


import imgGirl from "../../images/Shannon-Wilkinson-3.png"

function App() {

  let images = useRef(null)
  let tl
  
  useEffect(() => {
    let tl = new TimelineLite({ delay: .6});
    const girlImage = images.firstElementChild;    

    tl.from(girlImage, 1, {x: 2080, ease: Power3.easeOut},'Start')
    .from(girlImage.firstElementChild, 2, {ease: Power3.easeOut}, .5)
  }, [tl])



  return (
    <div className="section-one-container">
    <div className="hero">
          <div className="hero-images">
            <div ref={el => images = el}  className="hero-images-inner">
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" className="shanon"/>
              </div>
              <div className="hero-image-text">
                <p>
                Ik ben ontzettend dankbaar dat jij hier terecht bent gekomen! Als lifestylecoach, die tevens een echte ervaringsdeskundige is, begrijp ik als geen ander waar je tegenaan loopt: “been there, done That”!!
                Maar wat als ik je vertel dat jij net als ik beschikt over onbegrensde mogelijkheden om jou leven in eigen handen te nemen? Dat jij echt het leven kunt leven zoals jij dat wilt! En ik wil graag samen met jou die weg uitstippelen.
                </p>
                <h3 className="Naam">Patricia</h3>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;