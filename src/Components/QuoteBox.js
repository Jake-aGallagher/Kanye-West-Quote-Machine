import { useEffect, useState } from "react";
import axios from "axios";
import "./QuoteBox.css";

const QuoteBox = (props) => {
  const [theQuote, setTheQuote] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  /* Calling the API on the first render of the component */
  useEffect(() => {
    loadIntData();
  }, []);


  /* Calling the API when "Next Quote" is clicked */
  const nextQuoteHandler = () => {
    loadIntData();
  };

  /* Vanilla JS for fetch request to an API (without any headers or params)
  
  const loadIntData = async () => {
    setIsLoading(true);
    const response = await fetch("https://api.kanye.rest/");
    const data = await response.json();
    setTheQuote(data.quote);
    setIsLoading(false);
  }; 
  
  */

  /* Using Axios for the API request (without any headers or params) */
  const loadIntData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://api.kanye.rest/");
      console.log(response);
      setTheQuote(response.data.quote);
      setIsLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  /* Sending the current quote to the parent component to add to Favourites List */
  const favouriteHandler = () => {
    props.favouritesListHandler(theQuote);
  };

  return (
    <div className="quoteBox">
      {isLoading ? (
        <p className="theQuote">Loading...</p>
      ) : (
        <p className="theQuote">"{theQuote}"</p>
      )}
      <p className="attributed">-Kanye</p>
      <div className="quoteBoxButtons">
        <button className="nextQuote" onClick={nextQuoteHandler}>
          Next Quote
        </button>
        <button className="favThisQuote" onClick={favouriteHandler}>
          Favourite this Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
