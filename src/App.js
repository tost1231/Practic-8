import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import JokeList from './JokeList';

function App() {
  return (
    <div className="app">
      <Header title="My App" />
      <JokeList />
      <Footer title="Footer" />
    </div>
  );
}

export default App;
