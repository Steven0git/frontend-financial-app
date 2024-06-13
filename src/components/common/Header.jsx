import React from "react";
import myLogo from "/logo/logo.svg";

import Link from "./Link.jsx";

const Header = ({ children }) => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar w-full" data-theme="dracula">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <a href="/" className="ml-3 ms-1 flex md:me-24">
          <img src={myLogo} className="me-3 h-8" alt="Accounting" />
          <span className="self-center whitespace-nowrap text-xl font-semibold transition-all sm:text-2xl">
            Personal Accounting
          </span>
        </a>
        <div data-theme="dracula" className="hidden flex-none lg:block">
          <ul className="menu menu-horizontal">
            {/* Navbar menu content here */}
            <Link name="Home" href="/" icon="home" />
            <Link name="Signup" href="/register" icon="person_add" />
            <Link name="Signin" href="/login" icon="login" />
            <Link name="Contact" href="/contact" icon="contact_support" />
          </ul>
        </div>
      </div>
      {children}
    </>
  );
};

export default Header;
