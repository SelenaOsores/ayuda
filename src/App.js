import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/nosotrosHistoria' element={<nosotrosHistoria/>}/>
        <Route path='/nosotrosProd' element={<nosotrosProd/>}/>
        <Route path='/turnosLista' element={<turnosLista/>}/>
        <Route path='/turnosTerm' element={<turnosTerm/>}/>
        <Route path='/loginsignup' element={<LoginSignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;