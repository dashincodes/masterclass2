// @ts-nocheck
"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  }

  async function sendSignupInfo(name, email) {
    if (!name) {
      setErrorMsg("Please enter your name");
      return;
    }

    if (!email || !isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address");
      return;
    }

    try {
      const res = await axios.post(`https://sheetdb.io/api/v1/b0krd3r04ydi5`, {
        Name: name,
        Email: email,
      });
      console.log(res);
      window.location.href = "/success";
      setErrorMsg("");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="flex flex-col items-center md:justify-center  min-h-screen bg-gradient-to-r from-black to-slate-900 md:pb-20 pb-12">
      <div className="bg-gradient-to-r from-violet-800 to-violet-400 w-full text-center font-semibold py-2 capitalize fixed top-0 z-20">
        Mini Course: Clicks To Customers - 100% Free! 🎉
      </div>
      <div className="md:w-4/6 w-full mt-20 text-white flex flex-col items-center md:mt-32">
        <h2></h2>
        <h1 className="md:text-[4.2rem] text-[2.6rem] md:mx-0 mx-8 font-semibold text-center md:leading-[4.5rem]  leading-[3.2rem]  capitalize">
          learn how to{" "}
          <span className="text-violet-400">covert clicks into customers</span>{" "}
          for your Food Truck 💰🍗
        </h1>
        <div className=" md:mx-8 mx-8 md:mt-2 mt-2 md:w-5/6">
          <h2 className="md:text-2xl text-lg text-center mt-2 md:leading-[2.3rem] opacity-70 font-light capitalize">
            Not sure how to maximize online traffic for your food truck? Dive in
            and discover strategies to transform mere clicks into loyal
            customers and sizzling sales!" 🚚📈🌮
          </h2>
        </div>
      </div>

      <div className="flex w-full flex-col items-center -mt-12 mb-6 md:-mt-12">
        <div className="flex flex-col items-center mt-16">
          <div className="flex flex-col items-center">
            <div className="w-96 flex flex-col items-center">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="bg-white bg-opacity-5 mt-1 w-3/4 h-10 rounded-md px-2 text-white capitalize"
                placeholder="Enter Your Full Name"
              ></input>
            </div>
            <div className="mt-4 w-96 flex flex-col items-center">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="bg-white bg-opacity-5 mt-1 w-3/4 h-10 rounded-md px-2 text-white "
                placeholder="Enter Your Email Address"
              ></input>
            </div>
          </div>
          {errorMsg && <div className="text-red-500 mt-2">{errorMsg}</div>}

          <button
            className="hover:cursor-pointer bg-gradient-to-r from-violet-800 to-violet-400 w-56 py-3 rounded-full mt-4 text-lg z-10 font-bold"
            onClick={() => {
              sendSignupInfo(name, email);
            }}
          >
            Get For Free
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-white uppercase text-3xl font-bold">
          what you'll learn
        </h2>
      </div>
      <div>
        <div className="mt-4">
          <h3 className="text-white md:text-2xl text-lg opacity-70 ">
            Discover My 3-Step Method To Make Customers <br /> Fall in Love with
            Your Brand and Crave Your Food.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Page;
