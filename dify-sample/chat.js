import React, { useState, useEffect } from 'react';
import './App.css';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([{ text: '何か文章を書いてね', sender: 'bot' }]);
  }, []);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessages(messages => [...messages, { text: input, sender: 'user' }]);
    setInput('');
    try {
      const response = await fetch(process.env.REACT_APP_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          apikey: process.env.REACT_APP_API_KEY,
          query: input
        })
      });
      const data = await response.json();
      if (data.status === 0) {
        setMessages(messages => [...messages, { text: data.results[0].reply, sender: 'bot' }]);
      } else {
        setMessages(messages => [...messages, { text: 'Error: Unable to generate response', sender: 'bot' }]);
      }
    } catch (error) {
      setMessages(messages => [...messages, { text: 'Error: Failed to fetch data from API', sender: 'bot' }]);
    }
  }

  return (
    <div className="chatbot">
      <ul className="messages">
        {messages.map((message, index) => (
          <li key={index} className={message.sender}>
            <img src={`/${message.sender}.png`} alt={message.sender} />
            <span>{message.text}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;
