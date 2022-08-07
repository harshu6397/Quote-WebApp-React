import React, {useState} from 'react';
import './Card.css';

export default function Card({ parsedData, quote, author, setQuote, setAuthor }) {
    const [copied, setCopied] = useState(false);
    
    const handleCopy = () => {
        setCopied(true);
        navigator.clipboard.writeText(`${quote} - ${author}`);
    }

    const handleClick = () => {
        const randomQuote = parsedData[Math.floor(Math.random() * parsedData.length)];
        setQuote(randomQuote.content);
        setAuthor(randomQuote.author);
        setCopied(false);
    }

    const handleTweeterButton = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote} - ${author}`, '_blank');
    }


    return (
        <>
            <div className="quote-container" id="quote-container">
                {/* Copy Text Container  */}
                {
                    copied ? (<div className="copied" style={{float : "right"}}>Copied!</div>) 
                    :(<div id="copy-container" onClick={handleCopy}><i className="fa-solid fa-copy" id="copy" title="Copy Now!"></i></div>)
                }

                <div className="container">
                    Stay Motivated!
                </div>

                {/* Quote Text Box */}
                <div id="quote-text">{quote}</div>

                {/* Author */}
                <div id="quote-author">{author}</div>

                {/* Buttons */}
                <div className="button-container">
                    <button className="twitter-button button" id="twitter" title="Tweet this!" onClick={handleTweeterButton}>
                        <i className="fab fa-twitter"></i>
                    </button>
                    <button className="button" id="new-quote" onClick={handleClick}>New Quote</button>
                </div>
            </div>
        </>
    )
}
