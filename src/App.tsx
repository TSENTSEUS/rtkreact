import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import Detail from './pages/Detail';
import Header from './components/Header';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Header/>}>
        <Route index element={<HomePage />} />
        <Route path={'article/:id'} element={<Detail />} />
      </Route>

    </Routes>
  );
}

export default App;
