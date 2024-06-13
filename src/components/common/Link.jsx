import React from "react";
/**
 * This file used for manage link.
 * there two type state: dev and production mode.
 */

//load env/.env
const MODE = import.meta.env.VITE_IS_PRODUCTION;
const BASE_PATH = import.meta.env.VITE_PRODUCTION_BASE_URL;

const Link = ({ name, href, icon }) => {
  let link = MODE == "true" ? `${BASE_PATH}${href}` : href;
  return (
    <li>
      <a
        href={link}
        className="roboto-mono group flex items-center rounded-lg p-2 font-bold uppercase text-info transition-all hover:underline hover:opacity-90"
      >
        {icon && (
          <span
            className="nav-icon material-symbols-outlined text-info opacity-90 transition-all"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <span className="nunito-semibold roboto-mono ms-3 text-base font-extrabold text-info hover:underline">
          {name}
        </span>
      </a>
    </li>
  );
};

export default Link;
