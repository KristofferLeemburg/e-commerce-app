import React, {useState, useEffect} from 'react';
import "../../styles/navigation.css"
import { MenuItems } from "./MenuItems";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from "react-icons";

export default function Navigation() {

  const [clicked, setClicked] = useState(false);
  const [status, setStatus] = useState("top")

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
            const scrolled = document.scrollingElement.scrollTop;
            if (scrolled > 150) {
              if (status !== "transparent") {
                setStatus("transparent");
              }
            } 
            else {
              if (status !== "top") {
                setStatus("top");
              }
          }
        })
      })

  return (
    <nav className="NavbarItems" style={{
      backgroundColor:
       status === "top" ? "transparent" : "#2A4452"
    }}>
      <h1 className="navbar-logo">React</h1>
      <IconContext.Provider
      value={{ color: 'white', size: '20px' }}
    >
      <div className="menu-icon" onClick={() => setClicked((clicked) => !clicked)}>
      {clicked ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
      </IconContext.Provider>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.name} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    
    </nav>
  );
}