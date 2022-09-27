import React from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Link } from "gatsby";
import avi from "../images/toshiro-avi.jpeg";
const Intro = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <div
          style={{ backgroundImage: `url(${avi})` }}
          className="h-28 w-28 rounded-full bg-contain bg-top"
        ></div>
        <h1 className="px-4 pt-4 text-2xl font-semibold">
          Hello, I&apos;m Godwin Adigun.
        </h1>
      </div>
      <p className="text-center text-sm leading-loose text-dark-grey">
        I am a{" "}
        <span className="animate-flash text-white opacity-90">passionate</span>,{" "}
        talented, and hardworking{" "}
        <span className="animate-flashTwo text-white opacity-90">
          Backend Developer
        </span>{" "}
        adept at contributing to highly{" "}
        <span className="animate-flash text-white opacity-90">
          collaborative
        </span>{" "}
        work environment and building{" "}
        <span className="animate-flashTwo text-white opacity-90">
          web applications
        </span>{" "}
        across{" "}
        <span className="animate-flash text-white opacity-90">multiple</span>{" "}
        third-party integrations and databases that factor in specific demands
        for{" "}
        <span className="animate-flashTwo text-white opacity-90">
          accessibility
        </span>
        , reachability and security.
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
