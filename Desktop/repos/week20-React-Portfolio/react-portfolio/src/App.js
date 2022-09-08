import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutme from './components/Aboutme';
import Footer from './components/Footer'

function App() {
  return (
    <div className='header'>
      <Header />
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;
