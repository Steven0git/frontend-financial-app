import React, { useState } from "react";
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

const Register = () => {
  const [message, setMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const auth = import.meta.env.VITE_AUTH;
    const csrfToken = await getCookie("csrftoken");

    try {
      setLoading(true);
      const response = await axios.post("/create_user/", formData, {
        headers: {
          "X-CSRFToken": csrfToken,
          Authorization: `Token ${auth}`,
          "Content-Type": "multipart/form-data",
          "WWW-Authenticate": "Token",
        },
      });

      const $response = await JSON.parse(response.data);
      setMessage({
        type: "success",
        title: `${response.status} - ${response.statusText}`,
        message: $response.message || "Hmm no feedback! from server",
      });
      document.querySelector("button[type='submit']").classList.add("hidden");
      setTimeout(() => {
        location.href = "/login";
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error.response);
      setMessage({
        type: "error",
        title: `${error.response.status} - ${error.response.statusText}`,
        message: error.response.data || "Server didn't send message back!",
      });
    } finally {
      setTimeout(() => setLoading(false), 1500);
    }
  };

  return (
    <MainLayout>
      <FormLayout title="Create a Account">
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
          method="post"
          id="form"
        >
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
          <div className="mt-3 grid grid-cols-2 gap-x-2 px-2">
            <Input
              type="text"
              id="first_name"
              name="First Name"
              placeholder="First Name..."
              icon="person"
              maxlength="25"
            />
            <Input
              type="text"
              id="last_name"
              name="Last Name"
              placeholder="Last Name..."
              icon="person"
              maxlength="25"
            />
          </div>
          <div className="flex justify-center justify-items-center overflow-x-hidden p-0">
            <Button
              name="Register"
              icon="add"
              type="submit"
              className="w-full max-w-full"
            />
          </div>
          <hr className="my-2 opacity-40" />
          <span className="roboto-mono flex justify-end opacity-80 transition-all hover:opacity-100">
            Already have an account?
            <a
              href="/login"
              className="link link-info ml-2 text-blue-300 underline opacity-100 hover:text-blue-600 hover:underline"
            >
              Login
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

export default Register;
