import React from "react";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div className="navBar">
      <h1 className="navTitle">Kanye West Quote Machine</h1>
      <ul className="navList">
        <li className="quoteLink" onClick={props.quotesSelector}>
          Quotes
        </li>
        <li className="favLink" onClick={props.favsSelector} >
          Favourites
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
