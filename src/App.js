import React from "react";
import{Routes, Route} from 'react-router-dom';
import "./index.css";
import { Ginuwa, Home } from "./components";
import { History ,Account} from "./components";


export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/History' element={<History />} />
        <Route path='/Ginuwa' element={<Ginuwa />} />
        <Route path='/Account' element={<Account/>} />
      </Routes>
    </>
  );
}