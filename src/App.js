import {Routes, Route} from 'react-router-dom'
import './App.css';

import LandingView from './views/LandingView';

import Header from './componentes/header/Header'
import { NavbarProvider } from './componentes/header/navbar/NavbarContext';
function App() {
  return (
    <div>
      <NavbarProvider>
        <Header />
      </NavbarProvider>
      <Routes>
        <Route path='/' element={<LandingView/>} />
      </Routes>
    </div>
  );
}

export default App;
