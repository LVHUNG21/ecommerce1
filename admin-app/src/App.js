import './App.css';
import React,{useState} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import MainLayout from './component/MainLayout';
import Login from './pages/Login';
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/reset-password" element={<Resetpassword/>}/>
      <Route path="/forgot-password" element={<Forgotpassword/>}/>
      <Route path='/admin' element={<MainLayout/>}>
        <Route index element={<Dashboard/>}/>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
