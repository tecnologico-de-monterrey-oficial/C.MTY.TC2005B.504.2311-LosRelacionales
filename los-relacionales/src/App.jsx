
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Inicio from './components/Inicio'
import Acceder_cuenta from './components/Acceder_cuenta'
import './App.css'
//import Footer from './components/footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/" element={<Testimonios />} />
          <Route path="/" element={<Contacto />} />
          <Route path="/" element={<Acceder_cuenta />} />
        </Routes>
      </BrowserRouter>
  
      <h1>Los Relacionales</h1>
    </div>
  )
}

export default App
