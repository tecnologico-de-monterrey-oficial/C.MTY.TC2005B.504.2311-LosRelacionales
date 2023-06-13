import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Inicio from './components/Inicio'
import Acceder_cuenta from './components/Acceder_cuenta'
import './App.css'
//import Footer from './components/footer';
import MiPerfil from './components/MiPerfil';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/Testimonios" element={<Testimonios />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Acceder_cuenta" element={<Acceder_cuenta />} />
          <Route path="/MiPerfil" element={<MiPerfil />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
