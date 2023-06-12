import React from 'react';
import Dashboard from './components/Pages/Dashboard';
import { Pricing } from './components/Pricing';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/pricing' element={<Pricing />} />

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
