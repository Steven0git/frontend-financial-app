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

const Register = () => {
  return (
    <MainLayout>
      <FormLayout title="Create a Account">
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
      </FormLayout>
    </MainLayout>
  );
};

export default Register;
