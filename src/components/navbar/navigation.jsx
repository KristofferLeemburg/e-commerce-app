import React, {useState} from 'react';
import "../../styles/navigation.css"
import { MenuItems } from "./MenuItems";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navigation() {

  const [clicked, setClicked] = useState(false);

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">React</h1>
      <div className="menu-icon" onClick={() => setClicked((clicked) => !clicked)}>
      {clicked ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
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