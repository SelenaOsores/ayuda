import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './Pages/Inicio';
import {Servicios} from './Pages/Servicios';
import { NosotrosHistoria } from './Pages/NosotrosHistoria';
import { NosotrosProd} from './Pages/NosotrosProd';
import { TurnosLista } from './Pages/TurnosLista';
import { TurnosTerm } from './Pages/TurnosTerm';
import { LoginSignUp } from './Pages/LoginSignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/nosotrosHistoria' element={<nosotrosHistoria/>}/>
        <Route path='/nosotrosProd' element={<nosotrosProd/>}/>
        <Route path='/turnosLista' element={<turnosLista/>}/>
        <Route path='/turnosTerm' element={<turnosTerm/>}/>
        <Route path='/loginSignUp' element={<LoginSignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;