import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";
import BugHorde from "./views/bugs";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={BugHorde} path="/bugs" />
      </div>
    </BrowserRouter>
  );
}