import React, { useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Initial Movies';

function App() {
  return (

    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
      </Routes>
    </div>
  );
}

export default App;