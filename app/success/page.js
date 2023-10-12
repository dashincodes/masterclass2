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
          You have officially gained access to
        </h3>
      </div>
      <div className="md:w-1/2 mt-2 ">
        <h2 className="md:text-6xl text-4xl font-extrabold text-center text-white mt-4">
          Click Into Customer Mini Course!
        </h2>
      </div>

      <div>
        <h2 className="text-xl text-white mt-4 opacity-70">
          Check your email for the invite to join! Or you can tap on the button
          below to join instantly! 👇
        </h2>
      </div>
      <div className="mt-6">
        <a
          href="https://www.facebook.com/groups/125377357324707"
          target="blank"
        >
          <button className="bg-gradient-to-r from-violet-800 to-violet-400 px-8 py-4 rounded-full text-xl font-bold">
            Access Click To Customers
          </button>
        </a>
      </div>
    </div>
  );
}

export default page;
