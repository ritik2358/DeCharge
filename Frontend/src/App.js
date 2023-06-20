import React from 'react';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GoogleMap } from './pages/MapPage';
import OperatorDashboard from './pages/OperatorDashboard';
import NewCharger from './components/Operator/NewCharger';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/chargers' element={<GoogleMap />} />
          <Route exact path='/owner' element={<OperatorDashboard />} />
          <Route exact path='/add' element={<NewCharger />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
