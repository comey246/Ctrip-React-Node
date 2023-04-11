import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import Router from "@/routers/index";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  );
}

export default App;
