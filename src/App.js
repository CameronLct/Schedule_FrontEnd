import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import Routeur from './Router/Routeur';

function App() {
  return (
    <BrowserRouter>
      <Routeur />
    </BrowserRouter>
  );
}

export default App;
