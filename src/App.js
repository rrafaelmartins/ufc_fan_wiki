import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import logo from './logo.svg';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import './App.css';
import WeightClassInfo from './WeightClassInfo.js';


function App() {
  var [weightClass, setWeightClass] = useState("");
  return (
    
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main weightClass={weightClass} setWeightClass={setWeightClass} />} />
          <Route path="/weightclass" element={<WeightClassInfo weightClass={weightClass}/>} />
        </Routes>
      </Router>
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
