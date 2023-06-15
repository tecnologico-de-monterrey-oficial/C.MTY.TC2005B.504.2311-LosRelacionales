import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './components/NavigationBar'
import Inicio from './pages/inicio/Inicio'
import PAMs from './pages/pams/PAMs';
import PAM from './pages/pam/PAM';
import Profile from './pages/profile/Profile';
import Footer from './components/Footer'
import Protected from './components/Protected';
import DimensionFuncional from './pages/dimensiones/DimensionFuncional';
import DimensionAfectiva from './pages/dimensiones/DimensionAfectiva';
import DimensionDFisico from './pages/dimensiones/DimensionDFisico';
import PruebaGijon from './pages/pruebas/PruebaGijon';
import PruebaGijon2 from './pages/pruebas/PruebaGijon2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

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
            <Route
              path="/pams"
              element={
                <Protected
                  isLoggedIn={isLogged}>
                  <PAMs />
                </Protected>
              }
            />
            <Route path="/pam" element={<PAM />} />
            <Route
              path="/profile"
              element={
                <Protected
                  isLoggedIn={isLogged}>
                  <Profile />
                </Protected>
              }
            />
          <Route path="/DimensionFuncional" element={<DimensionFuncional/>} />
          <Route path="/DimensionAfectiva" element={<DimensionAfectiva/>} />
          <Route path="/DimensionDFisico" element={<DimensionDFisico/>} />
          <Route path="/PruebaGijon" element={<PruebaGijon/>} />
          <Route path="/PruebaGijon2" element={<PruebaGijon2/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div >
  )
}

export default App
