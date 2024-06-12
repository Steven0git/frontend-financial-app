import React from "react";
import axios from "axios";
import getCookie from "util/getCookie.jsx";

/**
 * @function Auth(tokenName)
 * @params {string} tokenName - Name of the token in localStorage.
 * @returns {Promise<object | Error>} Resolves with the authentication data,
 *                                    rejects with a structured error object.
 */

export default async function Auth(tokenName) {
  try {
    // Retrieve token data from localStorage
    const tokenData = await localStorage.getItem(tokenName);
    if (!tokenData) {
      throw new Error(
        "Authentication failed: Token not found in localStorage.",
      );
    }

    // Extract access and refresh tokens
    const { access, refresh } = JSON.parse(tokenData); // Parse token data
    const requestData = Object.freeze({
      refresh: refresh,
    });

    const csrfToken = getCookie("csrftoken") || "";
    // Create Axios instance with custom configuration
    const axiosInstance = axios.create({
      withCredentials: true,
      headers: {
        "x-csrftoken": csrfToken,
        "Content-Type": "application/json",
        Accept: "application/json",
        Vary: "Accept",
        Authorization: `Token ${import.meta.env.VITE_AUTH || "failure"}`,
        "WWW-Authenticate": "Token",
      },
    });

    // Make the token validation request
    const response = await axiosInstance.post(
      "/token/validate/",
      JSON.stringify(requestData),
    );

    // Handle successful validation
    return response.data;
  } catch (error) {
    // Handle errors with a structured error object
    const formattedError = {
      title: "Authentication Error",
      message: "",
    };

    if (error.response) {
      // Handle server-side errors
      formattedError.message =
        error.response.data.detail || error.response.statusText;

      if (error.response.status === 401) {
        formattedError.title = "Unauthorized";
      }
    } else {
      // Handle network or other client-side errors
      formattedError.message =
        "Failed to connect to the server. Please try again later.";
    }

    return Promise.reject(formattedError);
  }
}
