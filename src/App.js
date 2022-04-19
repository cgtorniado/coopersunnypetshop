import React from 'react';
import './App.css';
import { Home, About, Shop, Contact, Page404, CompanyHistory, Location } from "./Pages";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} >
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>

        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App;
