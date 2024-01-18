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

  const iframeContainerStyle = {
    padding: "56.25% 0 0 0",
    position: "relative",
    width: "100%",
    height: "0",
  };

  const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  const numberOfSpots = 18;

  return (
    <div className="flex flex-col items-center md:justify-center  min-h-screen bg-gradient-to-r from-black to-slate-900 md:pb-20 pb-12">
      <div className="bg-gradient-to-r from-violet-800 to-violet-400 w-full text-center font-semibold py-2 capitalize fixed top-0 z-20">
        There are officially only {numberOfSpots} spots left!
      </div>
      <div className="md:w-4/6 w-full mt-20 text-white flex flex-col items-center md:mt-24">
        <h1 className="md:text-[4.2rem] text-[2.2rem] md:mx-0 mx-8 font-semibold text-center md:leading-[4.5rem]  leading-[2.8rem]  capitalize">
          {""}
          <span className="text-violet-400">Explode Your Revenue In 2024</span>
        </h1>
        <div className=" md:mx-8 mx-8 md:mt-2 mt-2 md:w-5/6">
          <h2 className="md:text-2xl text-base text-center mt-2 md:leading-[2.3rem] leading-7 opacity-70 font-light capitalize">
            Join me and I will teach you how to add a minimum of $120,000 in
            annual revenue..or your money back" 🚚📈🌮
          </h2>
        </div>
      </div>
      <div className="md:w-2/4 md:mt-6 mt-4 w-full md:px-0 px-4">
        <div
          className="video-container"
          style={{
            width: "100%",
            height: "auto",
            position: "relative",
            paddingBottom: "56.25%",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/903882173"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              frameBorder: "0",
              allow: "autoplay; fullscreen; picture-in-picture",
              allowFullScreen: true,
            }}
            title="vsl final post"
          ></iframe>
        </div>
      </div>
      <div className="flex w-full flex-col items-center -mt-12 mb-6 md:-mt-12">
        <div className="flex flex-col items-center mt-16">
          {/* <div className="flex flex-col items-center">
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
          {errorMsg && <div className="text-red-500 mt-2">{errorMsg}</div>} */}

          <a href="https://buy.stripe.com/00g7tS0Q14yh43S7tu">
            {" "}
            <button className="hover:cursor-pointer bg-gradient-to-r from-violet-800 to-violet-400 w-56 py-3 rounded-full mt-4 text-lg z-10 font-bold">
              Reserve Your Spot
            </button>
          </a>

          <h4 className="text-zinc-500 mt-3">
            (Only {numberOfSpots} Spots Left)
          </h4>
        </div>
      </div>
      <div className="mt-4 mb-4">
        <h2 className="text-white uppercase text-3xl font-bold underline underline-offset-8">
          what you'll learn
        </h2>
      </div>

      <div className="text-white md:text-lg text-md mx-10 md:w-2/4 capitalize">
        <h4 className="opacity-70">
          <span className="text-violet-400 pr-2">
            Understanding Social Media Algorithms:
          </span>
          Become an expert of the algorithm. Decode the secrets behind major
          social media platforms' algorithms to get your food truck noticed.
        </h4>

        <h4 className="opacity-70 mt-4">
          <span className="text-violet-400 pr-2">
            Maximizing Organic Traffic:
          </span>
          Elevate your skills in driving organic traffic without relying on paid
          advertising.
        </h4>

        <h4 className="opacity-70 mt-4">
          <span className="text-violet-400 pr-2">
            Analyzing and Optimizing:
          </span>
          Become proficient in analyzing and optimizing marketing efforts based
          on data.
        </h4>

        <h4 className="opacity-70 mt-4">
          <span className="text-violet-400 pr-2">
            Consistently Going Viral:
          </span>
          Transform into a content creator capable of consistently generating
          viral material.
        </h4>

        <h4 className="opacity-70 mt-4">
          <span className="text-violet-400 pr-2">Leveraging Paid Traffic:</span>
          Learn how to effectively utilize my paid advertising to convert clicks
          into customers without breaking the bank, thus maximizing your
          returns.
        </h4>

        <h4 className="opacity-70 mt-4">
          <span className="text-violet-400 pr-2">
            Make Significantly More Money:
          </span>
          Ultimately, you will learn how to turn attention into actual paying
          customers.
        </h4>
      </div>
      {/* 
      <div className="flex md:flex-row flex-col items-center mt-10">
        <div className="w-96 m-6">
          <img
            src="https://ik.imagekit.io/jsklle928/IMG_6385.jpg?updatedAt=1699973884596"
            alt="testimonial"
          />
        </div>
        <div className="w-96 m-6">
          <img
            src="https://ik.imagekit.io/jsklle928/IMG_6386.jpg?updatedAt=1699973884666"
            alt="testimonial"
          />
        </div>
        <div className="w-96 m-6">
          <img
            src="https://ik.imagekit.io/jsklle928/IMG_6387.jpg?updatedAt=1699973884613"
            alt="testimonial"
          />
        </div>
      </div> */}

      <div className="flex flex-col items-center">
        <a href="https://buy.stripe.com/00g7tS0Q14yh43S7tu">
          {" "}
          <button className="hover:cursor-pointer bg-gradient-to-r from-violet-800 to-violet-400 w-56 py-3 rounded-full mt-4 text-lg z-10 font-bold">
            Reserve Your Spot
          </button>
        </a>
        <h4 className="text-zinc-500 mt-3">
          (Only {numberOfSpots} Spots Left)
        </h4>
      </div>
    </div>
  );
}

export default Page;
