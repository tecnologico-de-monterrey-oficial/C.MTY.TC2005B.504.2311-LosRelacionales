import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './components/NavigationBar'
import Inicio from './pages/inicio/Inicio'
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
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  )
}

export default App
