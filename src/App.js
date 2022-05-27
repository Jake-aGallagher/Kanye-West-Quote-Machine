import { Fragment, useState } from "react";

import "./App.css";
import Favourites from "./Components/Favourites";
import QuoteBox from "./Components/QuoteBox";
import NavBar from "./Layout/NavBar";

function App() {
  const [quotesOrFav, setQuotesOrFav] = useState(true);
  const [favouritesList, setFavouritesList] = useState([]);

  /* Changing the main screen to Quotes */
  const quotesSelector = () => {
    setQuotesOrFav(true);
  };

  /* Changing the main screen to the Favourited list */
  const favsSelector = () => {
    setQuotesOrFav(false);
  };

  /* Deleting the item from the Favourites List that has been selected */
  const deleteFavHandler = (recieved) => {
    setFavouritesList(() => {
      const newFavList = favouritesList.filter((i) => i !== recieved);
      return newFavList;
    });
  };

  /* Adding a quote to the Favourites List if it's not already in the list*/
  const favouritesListHandler = (theQuote) => {
    const index = favouritesList.indexOf(theQuote);
    if (index === -1) {
      setFavouritesList([...favouritesList, theQuote]);
    }
  };

  return (
    <Fragment>
      <header>
        <NavBar quotesSelector={quotesSelector} favsSelector={favsSelector} />
      </header>
      <div className="body">
        {quotesOrFav ? (
          <QuoteBox favouritesListHandler={favouritesListHandler} />
        ) : (
          <Favourites
            favouritesList={favouritesList}
            deleteItem={deleteFavHandler}
          />
        )}
        {quotesOrFav && <p id="atribute">With thanks to Kanye.rest API from @ajzbc</p>}
      </div>
    </Fragment>
  );
}

export default App;
