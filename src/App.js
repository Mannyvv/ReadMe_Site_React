import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
