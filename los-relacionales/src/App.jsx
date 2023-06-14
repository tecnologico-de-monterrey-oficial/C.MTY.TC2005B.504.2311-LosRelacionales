import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './components/NavigationBar'
import Inicio from './pages/inicio/Inicio'
import PAMs from './pages/pams/PAMs';
import PAM from './pages/pam/PAM';
import Login from './pages/login/Login';
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/pams" element={<PAMs />} />
            <Route path="/pam" element={<PAM />} />
            <Route path="/login" element={<Login />} /> 
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  )
}

export default App
