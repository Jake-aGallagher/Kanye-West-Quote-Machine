import React, { Fragment } from "react";
import './Favourites.css'


const Favourites = (props) => {
  return (
    <Fragment>
      {props.favouritesList.map((i) => (
        <div key={i} className="favouriteItem" >
          <p>"{i}"</p>
          <button onClick={() => props.deleteItem(i)} className="favouriteItemButton" >Delete from Favourites</button>
        </div>
      ))}
    </Fragment>
  );
};

export default Favourites;
