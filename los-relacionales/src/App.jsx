import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import Inicio from './components/Inicio'
import './App.css'
import MiPerfil from './components/MiPerfil';
import DimensionFuncional from './components/DimensionFuncional';
import DimensionAfectiva from './components/DimensionAfectiva';
import DimensionDFisico from './components/DimensionDFisico';
import PruebaGijon from './components/PruebaGijon';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/MiPerfil" element={<MiPerfil />} />
          <Route path="/DimensionFuncional" element={<DimensionFuncional/>} />
          <Route path="/DimensionAfectiva" element={<DimensionAfectiva/>} />
          <Route path="/DimensionDFisico" element={<DimensionDFisico/>} />
          <Route path="/PruebaGijon" element={<PruebaGijon/>} />
        </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App
