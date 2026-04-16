import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-dark text-white py-3 mb-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">Bharat Clock</h1>
        <nav>
          <Link to="/" className="btn btn-sm btn-outline-light me-2">
            Home
          </Link>
          <Link
            to="/india-digital-clock"
            className="btn btn-sm btn-primary me-2"
          >
            Digital Clock
          </Link>
          <Link to="/digital-watch" className="btn btn-sm btn-outline-light">
            Digital Watch
          </Link>
        </nav>
      </div>
    </header>
  );
}
