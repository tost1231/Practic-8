import React, { useState, useEffect } from 'react';
import { fetchJokes } from './api';
import JokeItem from './JokeItem';
import './JokeList.css';

function JokeList() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    async function loadJokes() {
      const jokes = await fetchJokes();
      setJokes(jokes);
    }
    loadJokes();
  }, []);

  return (
    <div className="joke-list">
      <h2>Jokes</h2>
      <button onClick={async () => setJokes(await fetchJokes())}>Load Jokes</button>
      <ul>
        {jokes.map((joke, index) => (
          <JokeItem key={index} joke={joke} />
        ))}
      </ul>
    </div>
  );
}

export default JokeList;
