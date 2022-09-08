import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutme from './components/Aboutme';

function App() {
  return (
    <div className='header'>
      <Header />
      <Aboutme />
    </div>
  );
}

export default App;
