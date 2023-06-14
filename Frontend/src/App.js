import React from 'react';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GoogleMap } from './pages/MapPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/chargers' element={<GoogleMap />} />

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
