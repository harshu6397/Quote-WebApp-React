import React, { useEffect, useState } from 'react'
import './App.css';
import Card from './components/Card/Card';
import Loader from './components/Loader/Loader';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [parsedData, setParsedData] = useState([]);

  let apiData = []
  const getQuotes = async () => {
    const url = `https://quotable.io/quotes?limit=150&page=${Math.floor(Math.random() * (Math.ceil(2043 / 150)))}`;
    try {
      // showLoading();
      const data = await fetch(url);    
      apiData = await data.json();
      setParsedData(apiData['results']);
      const randomQuote = apiData['results'][Math.floor(Math.random() * apiData['results'].length)];
      setQuote(randomQuote.content);
      setAuthor(randomQuote.author);  
      setLoading(false);
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      {loading ? <Loader/> : <Card parsedData={parsedData} quote={quote} author={author} setQuote={setQuote} setAuthor={setAuthor} />}
    </>
  );
}

export default App;
