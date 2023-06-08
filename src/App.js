import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<LoginPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/dashboard" element={<Home />} />

   </Routes>

  );
}

export default App;
