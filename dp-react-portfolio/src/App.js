import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './components/homePage/HomePage';
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
        <HomePage />
      <Footer />
    </div>
  );
}
