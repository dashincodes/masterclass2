import React from "react";

function page() {
  return <div className="flex flex-col justify-center h-screen items-center pt-8 w-full px-4">
    <div><h2 className="text-5xl uppercase text-violet-500">Congratulations!</h2></div>
    <div className="mt-8"><h3 className="text-3xl ">Your spot has officially been reserved for:</h3></div>
    <div className="md:w-1/2 mt-4 "><h2 className="text-6xl  font-extrabold text-center">The Business of Food Accelator Masterclass! 🔥</h2></div>
    <div className="mt-4"><h2 className="text-xl">First thing you need to do is download the Telegram App</h2></div>
    <div><h2 className="text-xl">Then Join Our Private Group Chat Here:</h2></div>
    <div className="mt-6"><a href="https://t.me/+5bqOufXa0l9mZDRh" target="blank"><button className="bg-violet-500 px-8 py-4 rounded-full text-2xl font-bold">Join The Private Chat</button></a></div>
  </div>;
}

export default page;
