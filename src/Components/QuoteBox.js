import { useEffect, useState } from "react";
import "./QuoteBox.css";

const QuoteBox = (props) => {
  const [theQuote, setTheQuote] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadIntData();
  }, []);

  const nextQuoteHandler = () => {
    loadIntData();
  };

  const loadIntData = async () => {
    setIsLoading(true);
    const response = await fetch("https://api.kanye.rest/");
    const data = await response.json();
    setTheQuote(data.quote);
    setIsLoading(false);
  };

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
