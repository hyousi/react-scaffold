import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/counter">counter</Link>
        </li>
        <li>
          <Link to="/student">student</Link>
        </li>
        <li>
          <Link to="/teacher">teacher</Link>
        </li>
      </ul>
    </nav>
  );
}
