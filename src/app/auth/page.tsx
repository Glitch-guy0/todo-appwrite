"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function MagicLogin() {
  const [error, setError] = useState(false);

  useEffect(() => {
    if(typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const userId = searchParams.get("userId");
      const secret = searchParams.get("secret");
      console.log(userId, secret);
      try {
        if(userId && secret){
          const res = (async () => await axios.post("/api/session", { userId, secret }))()
          res.then((obj) => {
            if(!obj.data.status){
              setError(true);
            }
          })
        }
      } catch (err) {
        setError(true);
      }
    }
  }, []); 

  if (error) {
    return (
      <div className="h-svh w-full flex justify-center items-center flex-col">
        <p className="text-center text-red-500">
          Something went wrong, try again later
        </p>
      </div>
    );
  } else {
    return (
      <div className="h-svh w-full flex justify-center items-center flex-col">
        <div className="m-auto my-2 rounded-full h-10 w-10 border-t-4 border-white/50 animate-spin"></div>
        <p className="text-xl text-center">Redirecting ...</p>
      </div>
    );
  }
}
