import React from 'react';
import "../../styles/navigation.css"
import { MenuItems } from "./MenuItems";

export default function Navigation() {

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">React</h1>
      <div className="menu-icon"></div>
      <ul>
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