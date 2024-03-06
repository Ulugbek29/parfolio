import React, { useEffect } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useCountUp } from "react-countup";

export default function index() {
  const { number, update } = useCountUp({
    ref: "counter",
    start: 0,
    end: 16,
    duration: 2,
  });
  const { number2, update2 } = useCountUp({
    ref: "counter2",
    start: 0,
    end: 25,
    duration: 2,
  });
  const { number3, update3 } = useCountUp({
    ref: "counter3",
    start: 0,
    end: 168,
    duration: 2,
  });
  const { number4, update4 } = useCountUp({
    ref: "counter4",
    start: 0,
    end: 8,
    duration: 2,
  });

  return (
    <div className="w-full min-h-screen flex flex-col gap-16 bg-[#0F0715] pt-16 px-[8%]">
      <div className="relative flex justify-between gap-8">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%]">
        {/* <h2 class="text-[15rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8750F7] to-violet-500 animate-pulse">HI</h2> */}
        </div>
        <div className="w-5/12 flex flex-col gap-10">
          <h2 className="text-4xl font-semibold">I am Ulugbek</h2>
          <h1 className="text-transparent bg-gradient-to-r from-[#8750F7] to-green-500 bg-clip-text font-bold text-7xl">
            Web Developer
          </h1>
          <p className="text-xl">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>
          <div className="flex items-center gap-4">
            <button className="border border-[#8750F7] rounded-xl text-[#8750F7] text-lg px-4 py-2 hover:bg-[#8750F7] hover:text-white">
              Download CV
            </button>
            <div className="flex items-center gap-4">
              <span className="p-1 rounded-full border border-[#8750F7] text-[#8750F7] hover:bg-[#8750F7] hover:text-white ">
                <TelegramIcon />
              </span>
              <span className="p-1 rounded-full border border-[#8750F7] text-[#8750F7] hover:bg-[#8750F7] hover:text-white ">
                <LinkedInIcon />
              </span>
              <span className="p-1 rounded-full border border-[#8750F7] text-[#8750F7] hover:bg-[#8750F7] hover:text-white ">
                <FacebookIcon />
              </span>
              <span className="p-1 rounded-full border border-[#8750F7] text-[#8750F7] hover:bg-[#8750F7] hover:text-white ">
                <InstagramIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="w-4/12">
          <div className="w-[400px] h-[500px] origin-center rotate-12 hover:rotate-0 transition duration-300 ease-in-out border-2 border-[#201535] hover:border-[#8750F7] rounded-2xl overflow-hidden">
            <img src="/me.png" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
        <div className="flex items-center text-4xl font-semibold">
          <span
            id="counter"
            className="text-5xl"
            style={{
              fontWeight: 700,
            }}
          >
            {number}
          </span>
            +
        </div>
          <h2>Years of Experience</h2>
        </div>
        <div className="flex items-center gap-4">
        <div className="flex items-center text-4xl font-semibold">
          <span
            id="counter2"
            className="text-5xl"
            style={{
              fontWeight: 700,
            }}
          >
            {number2}
          </span>
            +
        </div>
          <h2>Project Completed</h2>
        </div>
        <div className="flex items-center gap-4">
        <div className="flex items-center text-4xl">
          <span
            id="counter3"
            className="text-5xl"
            style={{
              fontWeight: 700,
            }}
          >
            {number3}
          </span>
            +
        </div>
          <h2>Happy
Clients</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center text-4xl">
          <span
            id="counter4"
            className="text-5xl"
            style={{
              fontWeight: 700,
            }}
          >
            {number4}
          </span>
            +
          </div>
          <h2>Skills</h2>
        </div>
      </div>
    </div>
  );
}
