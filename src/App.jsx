import { useState } from "react";
import { supabase } from "./client";
import "./App.css";
import Update from "./Update";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Read from "./Read";
import Create from "./Create";
import Gallery from "./Gallery";
function App() {
  console.log(supabase);
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link className="navBarLink" to="/">
          Home
        </Link>
        <Link className="navBarLink" to="/create">
          Create New
        </Link>
        <Link className="navBarLink" to="/gallery">
          Gallery
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
