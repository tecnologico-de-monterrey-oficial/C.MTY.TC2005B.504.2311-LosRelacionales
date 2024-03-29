import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './components/NavigationBar'
import Inicio from './pages/inicio/Inicio'
import PAMs from './pages/pams/PAMs';
import PAM from './pages/pam/PAM';
import Registro from './pages/profile/Registro';
import Footer from './components/Footer'
import Prueba from './pages/pruebas/Prueba';
import Pruebas2 from './pages/pruebas/Prueba2';
import PruebaGijon from './pages/pruebas/PruebaGijon';
import PruebaGijon2 from './pages/pruebas/PruebaGijon2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import WebGLComponent from './components/ApoyoPorDimension';

function App() {
  const { user } = useSelector((state) => state.auth);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLogged(true);
    }
  }, [user]);

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/pams" element={<PAMs />} />
            <Route path="/pam/edit/:id" element={<PAM />} />
            {isLogged ? (
              <Route path="/profile" element={<Registro />} />
            ) : (
              <Route path="/profile" element={<Inicio />} />
            )}
            <Route path="/PruebaGijon" element={<PruebaGijon />} />
            <Route path="/PruebaGijon2" element={<PruebaGijon2 />} />
          <Route path="/pruebas/:id" element={<Pruebas2/>} />
          <Route path="/ApoyoPorDimension" element={<WebGLComponent/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div >
  )
}

export default App
