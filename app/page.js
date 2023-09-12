import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-slate-900">
      <div className="bg-gradient-to-r from-violet-800 to-violet-400 w-full text-center font-semibold py-1 capitalize fixed top-0 z-10">
        There are officially only 18 Spots Left! 🎉
      </div>
      <div className="md:w-1/2 w-full   mt-20 text-white flex flex-col items-center">
        <h1 className="md:text-[4.2rem] text-[2.2rem] md:mx-0 mx-10 font-semibold text-center capitalize leading-[2.6rem] md:leading-[5.2rem]">
          Master the business of food 💰🍗
        </h1>
        <div className=" mx-16">
          <h2 className="md:text-xl text-md text-center mt-2 md:leading-[2.3rem] opacity-70 font-light">
            Private live training for motivated food entrepreneurs wanting ot
            reach the next level of their business.
          </h2>
        </div>
        <div className="flex flex-col items-center mt-4 bg-gradient-to-r from-violet-800 to-violet-400 w-56 py-3 rounded-full text-lg">
          <button className="hover:cursor-pointer">Join The Masterclass</button>
        </div>
      </div>
      <div className="flex w-full flex-col items-center mt-6 mb-6 md:-mt-12">
        <iframe
          title="Live Masterclass"
          src="https://player.vimeo.com/video/863295863?h=17f99bc91f"
          frameborder="0"
          allowfullscreen
          className="md:w-[640px] md:h-[564px]  w-full"
        ></iframe>
      </div>
      <div className="flex md:flex-row flex-col justify-between w-3/4  pb-24 md:-mt-10 md:flex-nowrap flex-wrap item-center">
        <div className="md:w-1/3 flex flex-col items-center ">
          <img
            src="https://ik.imagekit.io/jsklle928/stars-03.png?updatedAt=1694439967478"
            className="w-28"
          />
          <h3 className="text-white text-center mt-2 font-thin">
            "The masterclass was a major win for my business"
          </h3>
        </div>
        <div className="md:w-1/3 flex flex-col items-center">
          <img
            src="https://ik.imagekit.io/jsklle928/stars-03.png?updatedAt=1694439967478"
            className="w-28"
          />
          <h3 className="text-white text-center mt-2 font-thin">
            "The masterclass was truly amazing"
          </h3>
        </div>
        <div className="md:w-1/3 flex flex-col items-center">
          <img
            src="https://ik.imagekit.io/jsklle928/stars-03.png?updatedAt=1694439967478"
            className="w-28"
          />
          <h3 className="text-white text-center mt-2 font-thin">
            "We're definitely turning a corner for the better."
          </h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-nowrap flex-wrap items-center">
        <div>
          <h1 className="text-white text-6xl font-bold my-4 md:mx-0 mx-4 text-center">
            What's Inside?
          </h1>
        </div>
        <div className="flex  md:w-3/4 mt-12 md:flex-nowrap flex-wrap md:mx-0 mx-2">
          <div className="md:w-1/2  flex flex-col items-center mx-6 md:mt-0">
            <img
              src="https://ik.imagekit.io/jsklle928/Screenshot%202023-09-11%20at%204.13.21%20PM.png?updatedAt=1694463409344"
              className=""
            />
            <h3 className="text-white text-3xl mt-4 font-semibold">
              Live Training
            </h3>
            <h4 className="text-white font-thin text-center mt-3">
              Zero fluff training from Dashin, that will be full of tried and
              true knowledge you won't find anywhere else
            </h4>
          </div>
          <div className="md:w-1/2 flex flex-col items-center mx-6 md:mt-0 mt-20">
            <img
              src="https://ik.imagekit.io/jsklle928/Screenshot%202023-09-11%20at%2011.43.45%20AM.png?updatedAt=1694463503243G"
              className=""
            />
            <h3 className="text-white text-3xl mt-4 font-semibold">Live Q&A</h3>
            <h4 className="text-white font-thin text-center mt-3">
              Your chance to ask questions and get solutions to your biggest
              roadblocks. We shoot to do these 2-3 times per month.
            </h4>
          </div>
        </div>

        <div className="flex  md:w-3/4 md:mt-16 mt-0 md:flex-nowrap flex-wrap  ">
          <div className="md:w-1/2 flex flex-col items-center mx-6 md:mt-0 mt-20">
            <img
              src="https://assets.website-files.com/62d88eed5c7a8f350b8f904b/63e42cd5a0c727c3773c01bb_Screenshot%202023-02-08%20at%2011.10.53%20AM.png"
              className=""
            />
            <h3 className="text-white text-3xl mt-4 font-semibold">
              Resources
            </h3>
            <h4 className="text-white font-thin text-center mt-3">
              Access our library of amazing resources that will help you run
              your business. This includes templates, documents, checklists and
              more.
            </h4>
          </div>
          <div className="md:w-1/2 flex flex-col items-center mx-6 md:mt-0 mt-20">
            <img
              src="https://ik.imagekit.io/jsklle928/Screenshot%202023-09-11%20at%204.34.19%20PM.png?updatedAt=1694464488111"
              className=""
            />
            <h3 className="text-white text-3xl mt-4 font-semibold">
              Private Community
            </h3>
            <h4 className="text-white font-thin text-center mt-3">
              Safe, spam-free community for conversations, feedback and genuine
              support. You are going to feel right at home.
            </h4>
          </div>
        </div>
      </div>

      <div className="md:mt-32 mt-16 mx-16 flex justify-around flex-wrap mb-20">
        <div className="text-white md:w-1/4 md:mx-6 mx-2 md:my-0 my-8">
          <h3 className="text-sm font-thin text-left leading-6 pb-4">
            The masterclass oh boy!!! Where do I start? Dashin gave info and
            insight on 3 major social media platforms!!! He then gave tips and
            hacks I never heard before. Great value for knowledge presented!!!
            If you not learning form someone like Dashin. That actually applies
            what he teaches you are definitely leaving money on the table!!!
          </h3>
          <img
            src="https://ik.imagekit.io/jsklle928/stars-03.png?updatedAt=1694439967478"
            className="w-28"
          />
        </div>

        <div className="text-white md:w-1/4 md:mx-6 mx-2 md:my-0 my-8">
          <h3 className="text-sm font-thin text-left leading-6 pb-4">
            The masterclass was truly amazing! Not only did he go by everything
            step by step for multiple platforms, but he showed us tips and
            tricks for ads and promotions and posting hacks. He showed us how to
            set up pour accounts as well. My new business will definitely thrive
            with all this information and all my new pages. I highly recommend
            this class and anything Dashin offers!
          </h3>
          <img
            src="https://ik.imagekit.io/jsklle928/stars-03.png?updatedAt=1694439967478"
            className="w-28"
          />
        </div>

        <div className="text-white md:w-1/4 md:mx-6 mx-2 md:my-0 my-8">
          <h3 className="text-sm font-thin text-left leading-6 pb-4">
            Ok, so the masterclass was a major win for my business. I've
            struggled to figure out how to make social media work for my
            business. The masterclass went into great detail. We learned really
            good tips and tricks on how to build our pages and gain more local
            customers. I definitely will use what I learned TA-DAY!!! Thank you
            Food Truck King!
          </h3>
          <img
            src="https://ik.imagekit.io/jsklle928/stars-03.png?updatedAt=1694439967478"
            className="w-28"
          />
        </div>

        <div className="text-white md:w-1/4 md:mx-6 mx-2 md:my-0 my-8">
          <h3 className="text-sm font-thin text-left leading-6 pb-4">
            Dashin, thank yo uso much for sharing information that would take
            hours of research and a lot of trial and error into the session
            today. CAn't wait to put it in practice.
          </h3>
          <img
            src="https://ik.imagekit.io/jsklle928/stars-03.png?updatedAt=1694439967478"
            className="w-28"
          />
        </div>
      </div>

      <div className="flex flex-col items-center md:mt-20 mt-0">
        <h2 className="text-white text-5xl font-bold text-center">
          Choose your package
        </h2>
        <h3 className="text-white text-xl font-extralight mt-6 opacity-60 md:w-1/2 md:mx-0 mx-12 text-center leading-8 ">
          All plans have full access to all trainings, features and resources.
          Some plans have additional bonuses
        </h3>
      </div>

      <div className="md:w-3/4 mt-12 flex md:flex-row flex-col items-center pb-20 md:pb-32 md:flex-nowrap flex-wrap">
        <div className="text-zinc-400 bg-black bg-opacity-40 md:w-1/3 flex flex-col items-center py-12 border-t-2 border-t-violet-300 mx-2 md:px-0 px-16 mt-8">
          <h3 className="text-3xl font-semibold py-1">Standard</h3>
          <div className="flex flex-col items-center py-4">
            <h4 className="text-6xl font-bold text-violet-500">$97</h4>
            <h5>/one time payment</h5>
          </div>
          <h4 className="text-xl underline py-1">Includes:</h4>
          <h4>Live Training</h4>
          <h4>Live Q&A</h4>
          <h4>PDF Resources</h4>
          <h4>Community Access</h4>

          <div className="flex flex-col items-center mt-6 mb-4 bg-gradient-to-r from-violet-800 to-violet-500 w-56 py-3 rounded-full text-lg">
            <button className="font-bold text-xl">Join Now</button>
          </div>
        </div>

        <div className="text-zinc-400 bg-black bg-opacity-40 md:w-1/3 flex flex-col items-center py-12 border-t-2 border-t-violet-300 md:px-0 px-16 mt-8 mx-2">
          <h3 className="text-3xl font-semibold py-1">Pro</h3>
          <div className="flex flex-col items-center py-4">
            <h4 className="text-6xl font-bold text-violet-500">$197</h4>
            <h5>/one time payment</h5>
          </div>
          <h4 className="text-xl underline py-1">Includes:</h4>
          <h4>Live Training</h4>
          <h4>Live Q&A</h4>
          <h4>PDF Resources</h4>
          <h4>Community Access</h4>

          <div className="flex flex-col items-center mt-6 mb-4 bg-gradient-to-r from-violet-800 to-violet-500 w-56 py-3 rounded-full text-lg">
            <button className="font-bold text-xl">Join Now</button>
          </div>
        </div>

        <div className="text-zinc-400 bg-black bg-opacity-40 md:w-1/3 flex flex-col items-center py-12 border-t-2 border-t-violet-300 md:px-0 px-16 mt-8  mx-2">
          <h3 className="text-3xl font-semibold py-1">Advanced</h3>
          <div className="flex flex-col items-center py-4">
            <h4 className="text-6xl font-bold text-violet-500">$297</h4>
            <h5>/one time payment</h5>
          </div>
          <h4 className="text-xl underline py-1">Includes:</h4>
          <h4>Live Training</h4>
          <h4>Live Q&A</h4>
          <h4>PDF Resources</h4>
          <h4>Community Access</h4>

          <div className="flex flex-col items-center mt-6 mb-4 bg-gradient-to-r from-violet-800 to-violet-500 w-56 py-3 rounded-full text-lg">
            <button className="font-bold text-xl">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
