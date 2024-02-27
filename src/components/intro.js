import React from "react";
import {BsFillCaretRightFill} from "react-icons/bs";
import {Link} from "gatsby";
import avi from "../images/toshiro-avi.jpeg";
const Intro = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <div
          style={{backgroundImage: `url(${avi})`}}
          className="h-28 w-28 rounded-full bg-contain bg-top"
        ></div>
        <h1 className="px-4 pt-4 text-2xl font-semibold">
          Hello, I&apos;m Godwin Adigun.
        </h1>
      </div>
      <p className="text-sm leading-loose text-dark-grey">
          I stand as a{" "}
          <span className="animate-flash text-white opacity-90">dedicated</span>{" "}
          <span className="animate-flashTwo text-white opacity-90">and dynamic</span>{" "}
          <span className="animate-flash text-white opacity-90">backend</span>{" "}
          <span className="animate-flashTwo text-white opacity-90">developer</span>, distinguished by an{" "}
          <span className="animate-flash text-white opacity-90">insatiable thirst</span>{" "}
          for{" "}
          <span className="animate-flashTwo text-white opacity-90">learning</span> and a fervent commitment to delivering{" "}
          <span className="animate-flash text-white opacity-90">excellenct, efficient, secure, and scalable web applications</span>. 
        </p>

      <div className="m-1 my-5 flex items-center justify-center">
        <Link
          to="/work"
          className="flex items-center gap-x-2 bg-box-bg px-8 py-[0.6rem] text-xs text-white"
        >
          <span>Explore</span>
          <BsFillCaretRightFill />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
