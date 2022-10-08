import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/Login/Login";
import Game from "./routes/Game/Game";
import "./App.css";
class App extends Component {
  render() {
    return (
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/game" element={<Game />} />
        <Route
          path="/again"
          element={<Navigate replace to="/game"></Navigate>}
        />
      </Routes>
    );
  }
}

export default App;
