import React from "react";
import Header from "common/Header.jsx";

import Footer from "common/Footer.jsx";
import Main from "common/Main.jsx";
import Link from "common/Link.jsx";

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
          <ul className="menu flex min-h-full w-80 justify-start bg-base-200 p-4">
            {/* Sidebar content here */}
            <Link name="Home" href="/" icon="home" />
            <Link name="Signup" href="/register" icon="person_add" />
            <Link name="Signin" href="/login" icon="login" />
            <Link name="Contact" href="/contact" icon="contact_support" />
          </ul>
        </div>
      </div>
    </>
  );
};
export default MainLayout;
