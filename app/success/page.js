import React from "react";

function page() {
  return (
    <div className="flex flex-col justify-center h-screen items-center pt-8 w-full px-4 bg-gradient-to-r from-black to-slate-900">
      <div>
        <h2 className="md:text-5xl font-bold text-3xl uppercase text-white">
          Congratulations!
        </h2>
      </div>
      <div className="">
        <h3 className="md:text-3xl text-xl text-white  opacity-70 ">
          Your spot has officially been reserved for:
        </h3>
      </div>
      <div className="md:w-1/2 mt-2 ">
        <h2 className="md:text-6xl text-4xl font-extrabold text-center text-white mt-4">
          The Food Truck Marketing Bootcamp!
        </h2>
        <h3 className="md:text-2xl text-lg text-white text-center mt-4 opacity-70 ">
          Expect an email from me personally by the end of today for additional
          details about the live call:
        </h3>
      </div>
    </div>
  );
}

export default page;
