import React from "react";
import{Routes, Route} from 'react-router-dom';
import "./index.css";
import { Ginuwa, Navbar } from "./components";
import { History } from "./components";


export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path='/History' element={<History />} />
        <Route path='/Ginuwa' element={<Ginuwa />} />
      </Routes>
    </>
  );
}