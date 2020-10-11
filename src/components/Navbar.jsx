import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Covid19</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="/">
            Home
          </Link>
          <Link className="p-2 text-dark" to="/data">
            States-Data
          </Link>
          <Link className="p-2 text-dark" to="/info">
            Information
          </Link>
          <Link className="p-2 text-dark" to="/contact">
            ContactUs
          </Link>
        </nav>
        {/* <a class="btn btn-outline-primary" to="#">
          Sign up
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;
