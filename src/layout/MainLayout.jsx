import React from "react";
import Header from "common/Header.jsx";

import Footer from "common/Footer.jsx";
import Main from "common/Main.jsx";
const MainLayout = ({ children }) => {
  return (
    <>
      <div className="drawer w-screen overflow-x-hidden">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Header></Header>
          <Main>{children}</Main>
          <Footer />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu min-h-full w-80 bg-base-200 p-4">
            {/* Sidebar content here */}

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
    </>
  );
};
export default MainLayout;
