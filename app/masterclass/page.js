import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="w-full flex flex-col items-center pb-10 pt-6">
      <div className="text-center bg-violet-600 text-5xl uppercase font-bold py-3">
        <h2 className="px-2">spots are limited! </h2>
      </div>

      <div className=" flex justify-center w-full pt-6 ">
        <h2 className="text-center md:w-9/12 text-md px-8 md:px-0 md:text-2xl leading-8 md:leading-9 capitalize">
          I have <span className="text-violet-600">limited availability</span>{" "}
          for this exclusive training experience designed specifically for
          ambitious foodprenuers. Once we&apos;re filled up, the doors close -
          so make sure you secure your spot now!
        </h2>
      </div>
      <div className="mt-6 mb-4">
        <h1 className="capitalize text-center text-5xl font-extrabold ">
          the business of food accelerator masterclass 🔥
        </h1>
      </div>

      <div className="my-4">
        <Image
          width={450}
          height={500}
          src="https://ik.imagekit.io/jsklle928/Online_/IMG_2946.jpg?updatedAt=1689010847423"
          alt="578,000 in sales"
        />
        <h4 className="text-center mt-2 text-lg">(1 Year Sales Report)</h4>
      </div>

      <div className="mx-8  text-xl leading-9 ">
        <h3 className="py-2 capitalize">
          <span className="text-2xl">✅</span> Master the art of leveraging your
          website and social media for{" "}
          <span className="text-violet-400 capitalize">
            Maximized customer reach and higher sales
          </span>
        </h3>
        <h3 className="py-2 capitalize">
          <span className="text-2xl">✅</span> Learn the secrets to building an
          A-team who will{" "}
          <span className="text-violet-400 capitalize">
            Help your business soar to new heights
          </span>
        </h3>
        <h3 className="py-2 capitalize">
          <span className="text-2xl">✅</span> Acquire knowledge of the most
          effective systems that will{" "}
          <span className="text-violet-400 capitalize">
            Streamline your operations, improve efficiency, and profitability
          </span>
        </h3>
        <h3 className="py-2 capitalize">
          <span className="text-2xl">✅</span> Discover the techniques for
          <span className="text-violet-400 capitalize pl-1">
            Pricing your menu competitevely while still maintaining excellent
            profit margins{" "}
          </span>
        </h3>
        <h3 className="py-2 capitalize">
          <span className="text-2xl">✅</span> Equip yourself with the skills
          and strategies to{" "}
          <span className="text-violet-400 capitalize">
            Conquer every aspect of the food business,
          </span>{" "}
          from start-up to scaling
        </h3>
      </div>

      <div>
        <h2 className="text-4xl text-center font-bold mx-6 mt-2">
          Join me LIVE on July 14th at 8PM EST!
        </h2>
        <h4 className="text-center text-xl tracking-wide mt-2">
          (Replay Will Be Available)
        </h4>
      </div>
      <div className="my-4">
        <h1 className="text-violet-400 text-5xl font-bold underline underline-offset-8">
          ⭐️ Bonuses ⭐️
        </h1>
      </div>
      <div className="md:w-9/12">
        <h2 className="mx-6 text-center text-lg capitalize md:leading-8 md:mt-4">
          🔥 If you&apos;re on of the first 10 people to register, not only will
          you have access to the full masterclass replay whenever you need it,
          but you&apos;ll also receive an exclusive one on one bonus coaching
          call where we&apos;ll strategize your business growth, review your
          current strategies, and address any questions or challenges you may be
          facing.{" "}
        </h2>
        <h2 className="mx-6 mt-4 md:mt-8 text-center text-lg capitalize">
          🔥 If you can&apos;t make the live call there will be a full replay
          avaialable for you for that never expires.
        </h2>
        <h2 className="mx-6 mt-4 md:mt-8  text-center text-lg capitalize">
          🔥 There will be a live Q&A call after the presentation where you can
          ask all of your questions. We will stay on for questions for as long
          as there are questions to ask!
        </h2>
      </div>

      <div className="mt-6 flex items-center">
        <h2 className="text-3xl animate-bounce">👉</h2>
        <a href="" target="blank">
          <button className="bg-violet-600 py-4 px-10 text-xl font-bold tracking-wide uppercase rounded-full mx-4">
            Reserve Your Spot Now
          </button>
        </a>
        <h2
          className="text-3xl animate-bounce
        "
        >
          👈
        </h2>
      </div>
    </div>
  );
}

export default page;
