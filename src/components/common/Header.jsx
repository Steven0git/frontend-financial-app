import React from "react";
import myLogo from "/logo/logo.svg";
const Header = ({ children }) => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar w-full">
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
        <div className="hidden flex-none lg:block">
          <ul className="menu menu-horizontal">
            {/* Navbar menu content here */}
            <li>
              <a
                href="/"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span
                  className="nav-icon material-symbols-outlined"
                  aria-hidden="true"
                >
                  home
                </span>
                <span className="nunito-semibold ms-3 text-slate-500 hover:text-gray-600 hover:underline">
                  Home
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </>
  );
};

export default Header;
