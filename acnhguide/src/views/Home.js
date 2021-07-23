import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="home">
      <Link className="link" to="/bugs" exact >Bugs</Link>
    </div>
  );
}