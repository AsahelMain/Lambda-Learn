import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import Sidebar from './Sidebar';
import Progreso from './Progreso'; // Nuevo componente
import Modulos from './Modulos'; // Nuevo componente
// import Foro from './Foro'; // Nuevo componente
// import Oportunidades from './Oportunidades'; // Nuevo componente
// import Mensajes from './Mensajes'; // Nuevo componente
// import Perfil from './Perfil'; // Nuevo componente
// import Configuracion from './Configuracion'; // Nuevo componente
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="App">
      {!isLandingPage && <Sidebar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/progreso" element={<Progreso />} />
          <Route path="/modulos" element={<Modulos />} />
          {/* <Route path="/foro" element={<Foro />} />
          <Route path="/oportunidades" element={<Oportunidades />} />
          <Route path="/mensajes" element={<Mensajes />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/configuracion" element={<Configuracion />} /> */}
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
