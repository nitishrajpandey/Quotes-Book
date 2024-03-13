import React from "react";
import Header from "./components/header/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tags from "./pages/tagsPage/Tags";
import Author from "./pages/authorsPage/Author";
import Home from "./pages/homePage/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Tags" element={<Tags />} />
        <Route path="/Authors" element={<Author />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;