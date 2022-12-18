import React from "react";
import "./style.css";
import ved from "../../../assets/placeholder.jpg";

export default function Blade_1() {
  return (
    <div className="container flex gap-4 h-[90vh]">
      <div className="flex-1 my-auto">
        <h3 className="text-blue-300 2xl:text-7xl text-5xl font-bold leading-none">
          Ved Prakash <br /> Vishwakarma
        </h3>
        <h3 className="mt-5 2xl:text-4xl text-xl text-gray-700">
          Hey there!, I am a frontend developer.
        </h3>
        <button className=" 2xl:text-3xl text:2xl border-2 text-blue-200 border-blue-200  mt-5 pb-2 rounded-md px-4 py-2">
          Let's Connect
        </button>
      </div>
      <div className="flex-1 overflow-hidden my-auto rounded-full">
        <img
          className="w-full h-[30rem] object-cover object-center"
          src={ved}
          alt="work image"
        />
      </div>
    </div>
  );
}