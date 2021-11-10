import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Page from "./components/PageNotFound/Page";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route excat path="/" element={<Home />} />
          <Route excat path="/movie/:imdbID" element={<MovieDetail />} />
          <Route excat path="*" element={<Page />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
