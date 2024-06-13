import React, { useState, useRef } from "react";
import DjangoCSRFToken from "django-react-csrftoken";
import axios from "axios";
/**
 * Utils import
 */
import getCookie from "util/getCookie.jsx";
/**
 * Layout import.
 */
import MainLayout from "layout/MainLayout.jsx";
import FormLayout from "layout/FormLayout.jsx";
/**
 * UI import
 */
import Input from "ui/Input.jsx";
import Button from "ui/Button.jsx";
import Checkbox from "ui/Checkbox.jsx";
import Textarea from "ui/Textarea.jsx";
import Alert from "ui/Alert.jsx";

const Login = () => {
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (submitCount >= 3) {
      setMessage({
        type: "error",
        title: "Too many attempts!",
        message: "Please wait a few minutes and try again.",
      });
      document.querySelector("form#form").classList.add("hidden");
      return;
    }
    if (!navigator.cookieEnabled) {
      console.warn(
        "This website uses cookies to ensure security and functionality. Please enable cookies in your browser settings, at least for this site, or for 'same-origin' requests.",
      );
    } else {
      console.info(
        "Cookies are enabled. Your login request is being processed.",
      );
    }
    setSubmitCount(submitCount + 1);
    setIsLoading(true);

    const formData = new FormData(event.target);
    const csrfToken = await getCookie("csrftoken");
    let auth = import.meta.env.VITE_AUTH || "";

    try {
      const response = await axios.post("/login/", formData, {
        withCredentials: true,
        headers: {
          "x-csrftoken": csrfToken,
          Authorization: `Token ${auth}`,
          "Content-Type": "multipart/form-data",
          Vary: "Accept",
          "WWW-Authenticate": "Token",
        },
      });
      const $response = JSON.parse(response.data);
      setMessage({
        type: "success",
        title: `${response.status} - ${response.statusText}`,
        message: `${$response.info.message},` || "Hmm no feedback! from server",
        href: $response.info.redirect,
      });
      localStorage.getItem(import.meta.env.VITE_TOKEN_NAME) ??
        localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
      if ($response.token)
        localStorage.setItem(
          import.meta.env.VITE_TOKEN_NAME,
          JSON.stringify($response.token),
        );
      else location.reload();
      document.querySelector("form#form").classList.add("hidden");
    } catch (error) {
      console.error("Error submitting form:", error.response);
      setMessage({
        type: "error",
        title: `${error.response.status} - ${error.response.statusText}`,
        message: error.response.data || "Server didn't send message back!",
      });
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <MainLayout>
      <FormLayout title="Signin to your Account">
        <form
          className="space-y-4"
          onSubmit={submitHandler}
          method="post"
          id="form"
        >
          <DjangoCSRFToken />
          <hr className="opacity-40" />
          <div className="flex flex-col flex-wrap space-y-2">
            <Input
              type="email"
              id="email"
              name="Your Email"
              placeholder="Input your email..."
              icon="email"
              maxlength="25"
            />
            <Input
              type="password"
              id="password"
              name="Password"
              placeholder="Your Password..."
              icon="passkey"
              maxlength="35"
            />
          </div>
          <div className="flex justify-center justify-items-center overflow-x-hidden p-0">
            <Button
              name="Login"
              icon="add"
              type="submit"
              className="w-full max-w-full"
            />
          </div>
          <hr className="my-2 opacity-40" />
          <span className="roboto-mono flex justify-end opacity-80 transition-all hover:opacity-100">
            Does&apos;t have an account?
            <a
              href="/register"
              className="link link-info ml-2 text-blue-300 underline opacity-100 hover:text-blue-600 hover:underline"
            >
              Register
            </a>
          </span>
        </form>
        <div className="px-2 py-4">
          {isLoading && (
            <div
              id="loading-submit"
              className="mb-4 mt-2 flex items-center border-t-2 border-blue-300"
              role="alert"
            >
              <span className="material-symbols-outlined h-4 w-4 flex-shrink-0">
                pending
              </span>
              <div className="roboto-mono ms-3 text-sm font-medium">
                Sending the data to server....
              </div>
            </div>
          )}
          {!isLoading && message && <Alert {...message} />}
        </div>
      </FormLayout>
    </MainLayout>
  );
};

export default Login;
