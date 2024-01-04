import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
        <Main />
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
