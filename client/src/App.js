import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/" component={Home} />
    </>
  );
}

export default App;
