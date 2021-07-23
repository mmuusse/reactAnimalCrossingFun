import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import BugHorde from "./views/bugs";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route component={BugHorde} path="/" />
      </div>
    </BrowserRouter>
  );
}