import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

class Router {
  constructor() {
    this.routerList = [];
  }

  /**
   * @method add(jsonElm), Adds a router configuration to the internal list, performing validation before inclusion.
   * @param {Object<path: string, element: React.ReactElement | null>} jsonElm, The router configuration object to add.
   * @throws {TypeError}, If `jsonElm` is not a plain object.
   */
  add(jsonElm) {
    const validationResult = this.#_validateRouter(jsonElm);
    if (validationResult.status) {
      this.routerList.push(jsonElm);
    } else {
      console.error("Router configuration error:", validationResult.message);
    }
  }

  /**
   * @method getRouter(), Creates a BrowserRouter instance based on the accumulated router configurations.
   * @returns {BrowserRouter}, The configured router object.
   * @throws {RangeError}, its mean the data is empty
   */
  getRouter() {
    if (this.routerList.length < 1)
      throw new RangeError("Error! you didnt add anything");
    try {
      const router = createBrowserRouter(this.routerList);
      return (
        <Suspense fallback={<span id="preloader"></span>}>
          <RouterProvider router={router} />
        </Suspense>
      );
    } catch (error) {
      console.error("Internal Error creating router:", error.message);
    }
  }

  /**
   * @method #_validateRouter(jsonElm), Validates user input for router configuration, ensuring compliance with required properties and format.
   * @param {Object<path: string, element: React.ReactElement | null>} jsonElm, The router configuration object to validate.
   * @throws {TypeError}, If `jsonElm` is not a plain object && array.
   * @returns {ValidationResult}, An object indicating validation status and  any error messages.
   */
  #_validateRouter(jsonElm) {
    if (
      typeof jsonElm !== "object" ||
      jsonElm === null ||
      Array.isArray(jsonElm)
    ) {
      throw new TypeError("Invalid input: jsonElm must be a plain object.");
    }

    const requiredKeys = ["path", "element"];
    const missingKeys = requiredKeys.filter(
      (key) => !jsonElm.hasOwnProperty(key),
    );

    if (missingKeys.length > 0) {
      return {
        status: false,
        message: `Error: Missing required keys: ${missingKeys.join(", ")}`,
      };
    }

    if (!jsonElm.path.startsWith("/")) {
      return {
        status: false,
        message: "Error: Path must start with a forward slash '/'",
      };
    }

    if (jsonElm.element !== null && typeof jsonElm.element !== "object") {
      return {
        status: false,
        message: "Error: Element must be a React element or null",
      };
    }

    return {
      status: true,
      message: "",
    };
  }
}

export default Router;
