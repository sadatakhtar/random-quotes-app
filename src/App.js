import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Quotes from './components/Quotes';





function App() {
  const [fetchQuote, setFetchQuote] = useState("");
  //const [loader, setLoader] = useState(false);

 useEffect(() => {
   //https://random-quotes-heroku.herokuapp.com/quotes/random
   //https://quotes-cyf.glitch.me/quotes/random
   fetch('https://quotes-cyf.glitch.me/quotes/random')  
   .then(res => {
     return res.json();
   })
   .then(data => {
    // setLoader(true);
     console.log(data);
     setFetchQuote(data);
    // setLoader(false);
   })
   .catch(err => {
     console.log(err);
   })
 }, []);

  return  (
    <div className="App">
      <Header />
      <Quotes fetchQuote={fetchQuote} setFetchQuote={setFetchQuote}/>
      <Footer />
    </div>
  );
}

export default App;
