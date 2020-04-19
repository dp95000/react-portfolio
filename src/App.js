import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/Main';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
        <Main />
      <Footer />
    </div>
  );
}
