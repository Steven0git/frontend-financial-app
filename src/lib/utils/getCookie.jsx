import React from "react";

function getCookie(cname) {
  // 1. Robust Cookie Name Check:
  if (typeof cname !== "string" || cname.trim() === "") {
    return null; // Handle invalid cookie names gracefully
  }

  // 2. Efficient Decoding and Splitting:
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");

  // 3. Optimized Loop for Cookie Search:
  for (const cookiePair of ca) {
    const [cookieName, cookieValue] = cookiePair.trim().split("="); // Efficient destructuring

    if (cookieName === cname) {
      return cookieValue;
    }
  }

  // 4. Consistent Null Return:
  return null;
}

export default getCookie;
