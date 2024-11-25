import React from "react";
import "./scss/index.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";

function App() {
  return (
    <div id="app-wrapper">
      <div id="app-header">
        header
      </div>
      <div id="app-body">
        <BrowserRouter>
        <Routes>
          <Route path="/nyc-boy-dinner" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
