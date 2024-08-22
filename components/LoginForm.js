"use client";
import Link from "next/link";
import React from "react";

const LoginForm = () => {
  const handleSubmit = () => {
    // alert("sasa");
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Login form</h1>
        <form className="flex flex-col gap-3" onSubmit={() => handleSubmit()}>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button
            className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2"
            type="submit"
          >
            Login
          </button>
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            Error Message
          </div>
          <Link href={"/register"} className="text-sm mt-3 text-right">
            Dont have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
