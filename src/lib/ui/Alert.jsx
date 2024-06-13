import React from "react";

/**
 * Reusable Alert component for displaying informative messages with error, success, or warning styles.
 * @prop {string} title - The title of the alert message.
 * @prop {string} message - The main message content to be displayed.
 * @prop {'error' | 'success' | 'warning'} type - The type of alert to determine styling (default: 'error').
 * @prop {React.ReactNode} children - Optional additional content to render within the alert.
 */
const Alert = ({ type, title, message, href = null }) => {
  const validTypes = ["error", "success", "warning"];
  const alertTypes = {
    error: {
      className: "transition-all alert alert-error",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      messageModifier: (msg) => msg,
    },
    success: {
      className: "transition-all alert alert-success",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      messageModifier: (msg) => msg,
    },
    warning: {
      className: "transition-all alert alert-warning",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      messageModifier: (msg) => `Warning: ${msg}`,
    },
  };
  if (!validTypes.includes(type)) {
    console.warn("Invalid alert type:", type);
  }
  const { className, icon, messageModifier } = alertTypes[type];

  return (
    <div role="alert" data-aos="slide-up" className={className}>
      {icon}
      <div>
        <h3 className="nunito text-lg font-semibold underline">{title}</h3>
        <span className="roboto-mono py-2 text-base font-normal">
          {messageModifier(message)}
        </span>
      </div>
      {href && (
        <span>
          <a
            href={href}
            className="roboto-mono text-base font-medium text-blue-500 underline decoration-sky-400 transition-all hover:no-underline hover:opacity-80"
          >
            click here to continue
          </a>
        </span>
      )}
    </div>
  );
};

export default Alert;
