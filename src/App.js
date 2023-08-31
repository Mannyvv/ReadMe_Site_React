import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage';
import SearchPage from './pages/SearchPage';
import NewsLetterPage from "./pages/NewsLetterPage"
import Header from './components/Header';
import Footer from './components/Footer'
import NavbarComp from './components/NavbarComp';
import ContactPage from './pages/ContactPage';



function App() {
  return (
    <div className="App">
      <Header />
      <NavbarComp />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='ContactPage' element={<ContactPage/>}/>
        <Route path='AboutUs' element={<AboutUsPage/>}/>
        <Route path='NewsLetter/PastNewsLetter' element={<NewsLetterPage/>}/>
        <Route path='SearchPage' element={<SearchPage />} />
        <Route path='SearchPage/:searchTerm' element={<SearchPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
