import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import Detail from './pages/Detail';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/article/:id'} element={<Detail />} />
    </Routes>
  );
}

export default App;
