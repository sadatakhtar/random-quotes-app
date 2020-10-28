import React from 'react'
import './Quotes.css';

function Quotes({fetchQuote, setFetchQuote}) {
    const handleClick = () => {
        //setFetchQuote(fetchQuote);
        window.location.reload();
    }
    
    return (
        <div className="quotes">
            <h2>{`${fetchQuote.quote}`}</h2>
             <p>{`${fetchQuote.author}`} </p>
            <button className="btn" onClick={handleClick}>Click</button>
        </div>
    )
}

export default Quotes;
