import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Registration, Home, Leads, Profile } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<Registration/>} />
        <Route path="/login" element={<Home/>} />
        <Route path="/leads" element={<Leads/>} />
        <Route path="/perfil" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
  }

export default App
