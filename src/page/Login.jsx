import React from "react";
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

const Login = () => {
  return (
    <MainLayout>
      <FormLayout title="Signin to your Account">
        <form className="space-y-4">
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
      </FormLayout>
    </MainLayout>
  );
};

export default Login;
