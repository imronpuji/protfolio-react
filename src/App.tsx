import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout"
import Homepage from "./routers/Homepage"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className='w-[360px] mx-auto'>
    <Layout>
      <Routes>
        <Route element={<Homepage/>} path="/" />
      </Routes>
    </Layout>
    </div>
  );
}

export default App;
