"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { GiConsoleController } from "react-icons/gi";

export default function magicLogin() {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      const searchParams = new URLSearchParams(window.location.search);
      const userId = searchParams.get("userId");
      const secret = searchParams.get("secret");
      console.log(userId, secret);

      try {
        axios.post("/api/session", { userId, secret });
      } catch (err) {
        setError(true);
      }
    }
  });

  return (
    <>
      <div className="h-svh w-full flex justify-center items-center flex-col">
        {error ? (
          <>
            <p className="text-center text-red-500">
              Something went wrong, try again later
            </p>
          </>
        ) : (
          <>
            <div className="m-auto my-2 rounded-full h-10 w-10 border-t-4 border-white/50 animate-spin"></div>
            <p className="text-xl text-center">Redirecting ...</p>
          </>
        )}
      </div>
    </>
  );
}
