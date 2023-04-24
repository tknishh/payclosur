import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import DashboardMain from './Page/DashboardMain.jsx';
import Home from './Page/Home';
import YourAccount from './componets/YourAccount'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/Dashboard' exact element={<DashboardMain/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
