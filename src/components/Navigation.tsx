import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="text-xl font-bold">CodeCraft Compass</Link>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/review">Code Review</Link>
      </div>
    </nav>
  );
};

export default Navigation;

