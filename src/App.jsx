import logo from './logo.svg';
import {BrowserRouter,HashRouter} from 'react-router-dom'
import Router from "@/routers/index";
import AuthRouter from "@/routers/utils/authRouter.jsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthRouter>
        <Router />
      </AuthRouter>
    </BrowserRouter>
  );
}

export default App;
