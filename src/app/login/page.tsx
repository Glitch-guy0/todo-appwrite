"use client";

import sendMail from "@/appwrite/auth/sendMail";
import { useState } from "react";

export default function loginPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  async function submitHandler(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await sendMail(email);
      if (res) {
        setShowSuccess(true);
      } else {
        setShowError(true);
      }
    } catch (error) {
      setShowError(true);
    }
    setEmail("");
    setLoading(false);
  }

  return (
    <div className="h-svh w-full flex justify-center items-center">
      <div className="w-full bg-black/20 rounded-xl p-4 sm:px-8 sm:w-[40%]">
        {showSuccess ? (
          <>
            <div className="text-center">
              <h1 className="text-3xl font-bold">Link is Sent to your email</h1>
              <p className="text-lg">check your inbox</p>
            </div>
          </>
        ) : (
          <>
            {/* the form asking for email to get session */}
            <h1 className="text-2xl font-semibold">Login</h1>
            {showError ? (
              <>
                <p className="text-sm text-red-400 mt-2">
                  Something went wrong, try again
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-zinc-400">
                  Enter your email to get a magic session link
                </p>
              </>
            )}
            {/* separater */}
            <span className="my-6 block h-[1px] bg-white/30 rounded-full mx-5"></span>
            <form className="flex flex-col gap-4">
              {/*  input bg 'bg-transparent/10' */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 outline-none rounded-lg bg-transparent/20"
              />
              <button
                className="px-4 py-2 outline-none rounded-lg bg-sky-700 hover:bg-sky-700/70 mb-4"
                onClick={(e) => submitHandler(e)}
              >
                {loading ? (
                  <div className="size-4 border-t-4 animate-spin m-auto my-2 rounded-full"></div>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
