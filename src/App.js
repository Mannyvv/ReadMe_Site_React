import React from 'react';
import {Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomePage from './pages/HomePage'
import Header from './components/Header';
import Footer from './components/Footer'
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavbarComp/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
