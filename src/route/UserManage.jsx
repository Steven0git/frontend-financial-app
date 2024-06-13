import React, { useState, useEffect, lazy } from "react";
import Auth from "service/Auth.jsx";

const Home = lazy(() => import("secret/Home.jsx"));
const Add = lazy(() => import("secret/Add.jsx"));
const Show = lazy(() => import("secret/Show.jsx"));
/**
 * UserManage component manages user authentication and authorization.
 * 
 * @param {string} tokenName - The authentication token for the user.
 * 
 * @returns {void}, return nothing
 * 
 * EXAMPLE HOW TO USE:
 * const UserManager = new UserManage("yourToken")
 * if(UserManager.isUser()){ //check if user exists
 * //do page whatever you want, at this file i use for react router.
 * //example
 * router.add({
   path: "/",
   element: UserManager.homePage()
 }) }
 */

class UserManage {
  constructor(tokenName) {
    console.log("authentication start...")
    this.userData = null;
    this.isAuthenticated = false;
    this._verifyToken(tokenName);
  }

  /**
   * _verifyToken asynchronously verifies the user's authentication using the Auth service.
   *
   * @private
   */
  async _verifyToken(tokenName) {
    try {
      const response = await Auth(tokenName);
      this.userData = Object.freeze({
        // Freeze user data to prevent accidental modification
        name: response.data?.full_name || "Error! Display Name",
        email: response.data?.email || "Error Display Email!",
      });
      this.isAuthenticated = true;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * isUser checks the current authentication state.
   *
   * @returns {boolean} - True if authenticated, false otherwise.
   */
  isUser() {
    return this.isAuthenticated;
  }

  /**
   * homePage conditionally renders the Home component if authenticated.
   *
   * @returns {JSX.Element | null} - Home component or null.
   */
  homePage() {
    return this.isAuthenticated && this.userData ? (
      <Home name={this.userData.name} email={this.userData.email} />
    ) : null;
  }

  /**
   * addPage conditionally renders the Add component if authenticated.
   *
   * @returns {JSX.Element | null} - Add component or null.
   */
  addPage() {
    return this.isAuthenticated && this.userData ? (
      <Add name={this.userData.name} email={this.userData.email} />
    ) : null;
  }

  /**
   * showPage conditionally renders the Show component if authenticated.
   *
   * @returns {JSX.Element | null} - Show component or null.
   */
  showPage() {
    return this.isAuthenticated && this.userData ? (
      <Show name={this.userData.name} email={this.userData.email} />
    ) : null;
  }
}

export default UserManage;
