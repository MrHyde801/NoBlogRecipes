import React from "react";
import Header from "./components/PageHeader";
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import RecipeHeader from "./components/RecipeHeader";


function App() {
  return (
    <>
    <Header/>
    <RecipeHeader/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
    </Routes>
    </>
    
  )
}

export default App;
