import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import Inicio from './components/Inicio'
import './App.css'
import MiPerfil from './components/MiPerfil';
import DimensionFuncional from './components/DimensionFuncional';
import DimensionAfectiva from './components/DimensionAfectiva';
import DimensionDFisico from './components/DimensionDFisico';
import PruebaGijon from './components/PruebaGijon';
import PruebaKatz from './components/PruebaKatz';
import PruebaLawtonBrody from './components/PruebaLawtonBrody';
import PruebaGDS from './components/PruebaGDS';
import PruebaSARCF from './components/PruebaSARCF';
import PruebaFrail from './components/PruebaFrail';
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
          <Route path="/PruebaKatz" element={<PruebaKatz/>} />
          <Route path="/PruebaLawtonBrody" element={<PruebaLawtonBrody/>} />
          <Route path="/PruebaGDS" element={<PruebaGDS/>} />
          <Route path="/PruebaSARCF" element={<PruebaSARCF/>} />
          <Route path="/PruebaFrail" element={<PruebaFrail/>} />

        </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App
