import React from "react";
import { Link } from "react-router-dom";

interface NavBarModel {
  title: string;
}

const NavBar = ({ title }: NavBarModel) => {
  return (
    <div className="navbar bg-primary">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/exam/new">New Exam</Link>
        </li>
        <li>
          <Link to="/exam/view">View Exam</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
